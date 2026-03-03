import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex flex-col bg-background">
      <Hero />
      <HowItWorks />
      <Footer />
    </main>
  );
}
