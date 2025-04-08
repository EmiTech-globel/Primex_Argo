import { statistics } from "../constant";

const Stat = () => {
  return (
    <div className="relative flex justify-center items-center 
    flex-wrap bg-dark-light py-5 mt-5 w-full gap-10 rounded-2xl">
      {statistics.map((stat) => (
        <div 
          key={stat.label}
          className="flex flex-col justify-center items-center min-w-[120px]" // added this line
        >
          <p className="text-3xl md:text-[48px] font-comfortaa text-lima text-center">
            {stat.value}
          </p>
          <p className="-mt-2 text-sm md:text-base text-white text-center">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Stat;
