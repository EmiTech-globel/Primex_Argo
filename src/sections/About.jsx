import { about_img } from "../assets/images"
import { about_icon} from "../assets/icon"

const about = () => {
  return (
    <section id="about" className="flex justify-wrap items-center
    max-lg:flex-col-reverse lg:gap-16 lg:pt-[100px] gap-12 container-f section">
      <div data-aos='fade-right' className="flex-1">
        <img 
         src={about_img} 
         width={610}
         height={640}
         className="object-contain w-full rounded-2xl shadow-lg"
         alt="About Image" 
        />
      </div>

      <div data-aos='fade-left' className="flex-1 flex flex-col">
        <h2 className="mb-4 md:pr-5 text-4xl">
          Connecting Farmers and Buyers for a 
          <span className="text-lima"> Sustainable Agricultural</span> Future
        </h2>

        <p className="info-text pr-2 mb-3.5">
          At Primex Agro, we pride ourselves on delivering fresh, 
          high-quality agricultural products sourced ethically from local farms. 
          Our commitment to transparency and fair pricing ensures a reliable 
          partnership for all stakeholders in the supply chain.
        </p>

        <ul className="flex flex-col gap-4">
          <li className="info-li">
            <img src={about_icon} />
            Fresh and Well-Processed Agricultural Products
          </li>

          <li className="info-li">  
            <img src={about_icon} />
            Sustainable Partnerships with Local Farmers and Suppliers 
          </li>

          <li className="info-li">
            <img src={about_icon} />
             Seamless Delivery from Farm to Your Doorstep        
          </li>
        </ul>
      </div>
    </section>
  )
}

export default about