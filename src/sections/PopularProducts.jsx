
import { useRef } from "react";
import ArrowButton from "../component/ArrowButton";
import Button from "../component/Button";
import PopularProductCard from "../component/PopularProductCard";

const PopularProducts = () => {
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
    <section id="products" className="section container-f bg-white">
    <div className="mb-5 lg:mb-10">
      {/* Section Header */}
      <div data-aos="fade-right" className="text-left mb-12 md:mb-14 mx-auto md:flex 
      justify-between">
        <div> 
        <p className="text-lima font-semibold uppercase">Quality</p>
        <h2 className="text-4xl lg:pr-[30rem] mt-2">
        Products
        </h2>
        <p className="info-text my-4 pb-4 lg:pr-[33rem] mx-auto">
        Explore our extensive range of agricultural commodities.
        </p>
        </div>
        
        <div className="md:flex items-center justify-center"> 
          <Button 
             label='Order Now' 
             href="https://api.whatsapp.com/send?phone=2348143006981&text=Hello%20there!%20I%20want%20to%20place%20an%20order%20for%20your%20products." 
             backgroundColor="bg-transparent" 
             textColor="text-black" 
             borderColor="border-black" 
          />
        </div>
      </div>

      {/* PopularProduct Cards */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex mx-5 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          <PopularProductCard />
          <PopularProductCard />
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-5 justify-end items-center  mt-12 z-10">
         <ArrowButton direction={"left"} onClick={() => scroll("left")} />
         <ArrowButton direction={"right"} onClick={() => scroll("right")} />
        </div>

      </div>
    </div>
  </section>
  )
}

export default PopularProducts