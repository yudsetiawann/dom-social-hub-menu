import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Menu from "@/src/components/Menu";
import Values from "@/src/components/Values";
import Interactive from "@/src/components/Interactive";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-coffee selection:bg-gold-accent selection:text-dark-coffee">
      <Navbar />
      <Hero />
      <Menu />
      <Values />
      <Interactive />
      <Footer />
    </main>
  );
}
