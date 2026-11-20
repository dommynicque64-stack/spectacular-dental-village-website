import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <main>
        <Hero />
        <Highlights />
        <About />
        <Services />
        <WhyChooseUs />
        <Team />
        <Booking />
        <Testimonials />
        <Hours />
        <Location />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
