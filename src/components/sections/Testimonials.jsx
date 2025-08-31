import TestimonialCard from "../common/TestimonialCard";
import SectionContainer from "../common/SectionContainer";

const Testimonials = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col">
        <div className="">
          <h2 className="font-semibold text-4xl">
            See Why Top Performers Choose LeadCRM
          </h2>
        </div>
        <div id="testimonial-cont" className="flex gap-2">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
