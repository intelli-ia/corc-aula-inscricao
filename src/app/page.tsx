import Hero from "@/components/sections/Hero";
import WhatYouLearn from "@/components/sections/WhatYouLearn";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex flex-col bg-background">
      <Hero />
      <WhatYouLearn />
      <Footer />
    </main>
  );
}
