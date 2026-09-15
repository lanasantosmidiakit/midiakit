import { readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/media");
const appDir = path.resolve("src/app");
const unused = [
  "public/media/about/quemsoueu.jpg",
  "public/media/about/quemsoueu_v2.jpg",
  "public/media/about/quemsoueu_v3.png",
  "public/media/hero/capa.png",
  "public/media/linknabio/perfil.png",
  "public/media/linknabio/perfil_v2.png",
  "public/media/modelStats/modelStats.png",
  "public/file.svg",
  "public/globe.svg",
  "public/window.svg",
];

async function walk(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function isRaster(file) {
  return /\.(jpe?g|png)$/i.test(file);
}

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase();
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const image = sharp(file, { failOn: "none", sequentialRead: true }).rotate();
  const options =
    ext === ".png"
      ? { lossless: true, effort: 6 }
      : { quality: 100, smartSubsample: true, effort: 6 };

  const buffer = await image.webp(options).toBuffer();
  image.destroy();
  await writeFile(out, buffer);

  try {
    await unlink(file);
  } catch (error) {
    console.warn(`keep ${path.relative(process.cwd(), file)} (${error.code})`);
  }

  console.log(`ok  ${path.relative(process.cwd(), out)}`);
}

const files = [...(await walk(root)), ...(await walk(appDir))].filter(isRaster);
const unusedSet = new Set(unused.map((item) => path.resolve(item)));

for (const file of unused) {
  try {
    await unlink(path.resolve(file));
    console.log(`del ${file}`);
  } catch {
    // already gone
  }
}

for (const file of files) {
  if (unusedSet.has(path.resolve(file))) continue;
  await convertFile(file);
}
