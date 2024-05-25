import StartSection from "./components/startSection";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
        <StartSection />
        <br></br>
        <hr></hr>
        <br></br>
        <About />
        <br></br>
        <hr></hr>
        <br></br>
        <Projects />
        <br></br>
        <hr></hr>
        <br></br>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}