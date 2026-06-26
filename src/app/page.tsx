import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import ServicesStrip from "@/components/ServicesStrip";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HashScrollHandler from "@/components/HashScrollHandler";
import PageBody from "@/components/PageBody";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Header />
      <PageBody>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <ServicesStrip />
        <CtaBanner />
        <Contact />
      </PageBody>
      <Footer />
    </>
  );
}
