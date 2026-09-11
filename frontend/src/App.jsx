import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#020611]">
      <AmbientBackground />

      <section className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_70%_64%,rgba(34,51,135,.12),transparent_28%),linear-gradient(135deg,rgba(1,5,14,.96),rgba(3,7,19,.82))]">
        <Navbar />
        <Hero />
        <Footer />
      </section>
    </main>
  );
}

function AmbientBackground() {
  return (
    <>
      <div className="pointer-events-none absolute -left-[100px] -top-[90px] h-[150px] w-[240px] rounded-full bg-[rgba(79,62,170,.18)] blur-[70px]" />
      <div className="pointer-events-none absolute -bottom-[120px] -left-[160px] h-[180px] w-[300px] rounded-full bg-[rgba(36,65,190,.12)] blur-[70px]" />
      <div className="pointer-events-none absolute -bottom-[80px] -right-[220px] h-[260px] w-[420px] rounded-full bg-[rgba(29,51,182,.14)] blur-[70px]" />
    </>
  );
}
