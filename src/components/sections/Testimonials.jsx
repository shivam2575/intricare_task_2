import TestimonialCard from "../common/TestimonialCard";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";

const Testimonials = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col">
        <SectionHeading center={true}>
          See Why Top Performers Choose LeadCRM
        </SectionHeading>
        <div id="testimonial-cont" className="flex flex-col gap-2">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
