import Button from "../component/Button";
import Stat from "../component/Stat";

const Hero = () => {
  return (
    <section id="home" className="section hero pt-40 pb-16 flex justify-center items-center relative">
      <div className="container-f mx-auto px-4 grid lg:grid-cols-2 gap-8">
        <div data-aos="fade-down" className="relative text-center justify-center items-center text-white lg:text-left">
          <h1 className="font-comfortaa text-4xl md:text-6xl leading-[120%] pb-4">
            Connecting Farmers to <span className="text-lima">Global Markets</span> Effortlessly
          </h1>
          <p className="text-neutral-light pb-3.5">
            At Primex Agro, we empower farmers and suppliers by bridging the gap to global
            buyers. Discover how we ensure quality, transparency, and fair pricing in 
            every transaction.
          </p>

          <div className="gap-4 flex justify-center lg:justify-start items-center">
            <Button href="#about" label="Learn More" />
            <Button 
              label="Contact" 
              href="#contact" 
              backgroundColor="bg-transparent" 
              textColor="text-white" 
              borderColor="border-white" 
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1600" className="relative flex justify-center items-end">
          <Stat />
        </div>
      </div>
    </section>
  );
};

export default Hero;
