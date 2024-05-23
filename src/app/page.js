import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
        <startSection />
        <hr></hr>
      </div>
      <Footer />
    </main>
  );
}