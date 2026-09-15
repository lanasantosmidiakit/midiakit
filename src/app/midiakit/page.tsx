import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Profile } from "@/components/sections/Profile";
import { Audience } from "@/components/sections/Audience";
import { ContentCreation } from "@/components/sections/ContentCreation";
import { Brands } from "@/components/sections/Brands";
import { Feedbacks } from "@/components/sections/Feedbacks";
import { ModelStats } from "@/components/sections/ModelStats";
import { Deliverables } from "@/components/sections/Deliverables";
import { Contact } from "@/components/sections/Contact";

export default function MediaKitPage() {
  return (
    <main>
      <Hero />
      <About />
      <Profile />
      <Audience />
      <ContentCreation />
      <Brands />
      <Feedbacks />
      <ModelStats />
      <Deliverables />
      <Contact />
    </main>
  );
}
