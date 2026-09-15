import { existsSync, readFileSync } from "node:fs";

const files = ["src/data/media-kit.ts", "src/lib/site.ts"];
const text = files.map((file) => readFileSync(file, "utf8")).join("\n");
const paths = [...new Set([...text.matchAll(/"(\/media\/[^"]+)"/g)].map((match) => match[1]))];

let missing = 0;
for (const item of paths) {
  const file = `public${item}`;
  if (!existsSync(file)) {
    console.log(`MISSING ${item}`);
    missing += 1;
  }
}

console.log(`${paths.length} media refs, ${missing} missing`);
