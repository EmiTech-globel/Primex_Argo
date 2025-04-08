import { contact_img } from "../assets/images";
import { contact } from "../constant";

const Contact = () => {
  return (
    <section id="contact" className="container-f section items-center 
    justify-center">
      <div className="bg-neutral text-center rounded-[3rem]
       w-full items-center">

        <div data-aos="fade-down" className="py-12">
          <h2 className="text-3xl md:text-4xl text-white">Contact Us</h2>
          <p className=" text-sm px-16 text-neutral-light">
            Reach out to explore how we can support your agricultural needs and enhance your business.
          </p>
        </div>
          
          {/* Contact Us Details */}
       <div className="grid gap-10 lg:grid-cols-2 lg:text-left">
        <div data-aos="fade-right" data-aos-duration="1800" className=" grid lg:grid-cols-2 lg:order-1 gap-10 text-white lg:mb-24">
          {/* Write Us */}
          <div >
            <h3 className="mb-2 lg:text-2xl">Write Us</h3>
            <div className="items-center justify-center 
             lg:justify-start flex gap-4 ">
              {contact.map((icon) => (
                <a
                  key={icon}
                  href={icon.href}
                >
                <img 
                 src={icon.imgURL} 
                 alt="Contact_Icon" 
                 width={30}
                 className="h-10 w-10 rounded-full bg-neutral-light p-2 
                 hover:-translate-y-1 transition duration-300 ease-in-out"
                />
                </a>
              ))}
            </div>
          </div>

          {/* Call Us */}
          <div>
            <h3 className="mb-2 lg:text-2xl">Call Us and Order</h3>
            <p className="text-[16px]">+234-811-904-8768</p>
            <p className="text-[16px]">+234-814-300-6981</p>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="mb-2 lg:text-2xl">Find us here</h3>
            <p className=" text-[16px] md:text-base">
            No.11 essien essien Street, <br />
            Eket, Akwa ibom state, Nigeria
            </p>
          </div>
        </div>

        {/* Left Image */}
        <div data-aos="fade-left" data-aos-duration="2000" className="w-full">
          <img
            src={contact_img}
            alt="Delivery Boy"
            className="w-[100%] contrast-125"
          />
        </div>
      </div> 
      </div>
    </section>
  );
};

export default Contact;
