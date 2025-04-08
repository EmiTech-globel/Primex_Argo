import { footerLinks } from "../constant"

const Footer = () => {
  return (
    <footer data-aos="fade-down" className="container-f section">
    <div className="gap-6 grid">
       <a href="#" className="text-3xl text-center font-comfortaa font-bold">Primex Argo</a>

       <div className="text-center grid">
         <div className="grid grid-cols-2 gap-4 ">
          <a href="#" className="text-neutral md:justify-self-start hover:underline">Terms & Agreements</a>
          <a href="#" className="text-neutral md:justify-self-end hover:underline">Privacy Policy</a>
         </div>
           
          <div className="cols-span-2 flex mt-6 justify-center
           gap-4 relative md:col-span-1">
           {footerLinks.map((link) => (
            <a href={link.href}>
              <img 
              src={link.src} 
              width={24}
              height={24}
              className="h-10 w-10 rounded-full bg-neutral-light p-2 
              hover:-translate-y-1 transition 
              duration-300 ease-in-out"
              />
            </a>
           ))}
          </div>
       </div>
    </div>
    
    <div className="block text-center text-neutral-light text-sm mt-10">
       <p> &#169; All Rights Reserved By Primex Argo</p>
       <p className="text-[10px]">Designed by TrixArt</p>
    </div>
 </footer>
  )
}

export default Footer