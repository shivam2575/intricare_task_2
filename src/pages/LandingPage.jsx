import BelowHero from "../components/sections/BelowHero";
import Header from "../components/sections/Header";
import HorizontalScroll from "../components/HorizontalScroll";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import LinkedInSales from "../components/sections/LinkedInSales";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HorizontalScroll />
      <BelowHero />
      <HowItWorks />
      <Testimonials />
      <LinkedInSales />
    </>
  );
};

export default LandingPage;
