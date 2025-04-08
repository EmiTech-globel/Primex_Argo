import { useRef } from "react";
import ArrowButton from "../component/ArrowButton";
import ServiceCard from "../component/ServiceCard";

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section id="services" className="section container-f">
      <div>
        {/* Section Header */}
        <div
          className="text-left mb-12 lg:mb-14 mx-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p className="text-lima font-semibold uppercase">Quality</p>
          <h2 className="text-4xl lg:pr-[30rem] mt-2">
            Why Choose <span className="text-lima">Primex Agro</span> for Your Needs?
          </h2>
          <p className="info-text mt-4 lg:pr-[33rem] mx-auto">
            At Primex Agro, we prioritize quality and reliability in every transaction.
            Our commitment to fresh, standardized products ensures that you receive only the best.
          </p>
        </div>

        {/* Service Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth scrollbar-hide"
          >
              <ServiceCard />
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-5 justify-center items-center  mt-12 z-10">
            <ArrowButton direction={"left"} onClick={() => scroll("left")} />
            <ArrowButton direction={"right"} onClick={() => scroll("right")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
