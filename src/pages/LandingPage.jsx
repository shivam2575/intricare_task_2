import BelowHero from "../components/sections/BelowHero";
import Header from "../components/sections/Header";
import HorizontalScroll from "../components/HorizontalScroll";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import LinkedInSales from "../components/sections/LinkedInSales";
import SingleSource from "../components/sections/SingleSource";
import RevenueEngine from "../components/sections/RevenueEngine";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/sections/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HorizontalScroll />
      <BelowHero />
      <HowItWorks />
      <Testimonials />
      <LinkedInSales />
      <SingleSource />
      <RevenueEngine />
      <FAQ />
      <Footer />
    </>
  );
};

export default LandingPage;
