import TestimonialCard from "../common/TestimonialCard";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";

const Testimonials = () => {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  return (
    <SectionContainer>
      <div className="flex flex-col">
        <SectionHeading center={isDesktop ? false : true}>
          See Why Top Performers Choose LeadCRM
        </SectionHeading>
        <div id="testimonial-cont" className="vertical-gap-sm md:flex-row">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
