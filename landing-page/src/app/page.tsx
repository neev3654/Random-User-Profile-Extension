import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Screenshots } from "@/components/Screenshots";
import { InstallSteps } from "@/components/InstallSteps";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <InstallSteps />
      <Footer />
    </main>
  );
}
