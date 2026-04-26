import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Menu from "@/src/components/Menu";
import Values from "@/src/components/Values";
import Interactive from "@/src/components/Interactive";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-theme-bg selection:bg-theme-accent selection:text-theme-bg transition-colors duration-500">
      <Navbar />
      <Hero />
      <Menu />
      <Values />
      <Interactive />
      <Footer />
    </main>
  );
}
