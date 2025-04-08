import { statistics } from "../constant"
const Stat = () => {
  return (
    <div className="relative flex
        justify-center items-center
        flex-wrap bg-dark-light py-5 w-full mt-5
        gap-16 rounded-2xl">
        {statistics.map((stat) => (
         <div key={stat.label}>
           <p className="text-[48px] font-comfortaa text-lima">
             {stat.value}
           </p>
           <p className="-mt-4 text-white">
              {stat.label}
           </p>           
         </div>
        ))}
    </div>
  )
}

export default Stat