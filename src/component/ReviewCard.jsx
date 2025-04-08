import { Stars } from "../assets/icon";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div
      data-aos="fade-left"         
      data-aos-delay="500"        
      data-aos-duration="1000"    
      className="flex flex-col justify-center items-center p-6 bg-white rounded-xl shadow-lg"
    >
      <div className="mt-3 flex items-center gap-2.5">
        <img
          src={Stars}
          alt="stars"
          className="object-contain m-0"
        />
        <p className="text-xl max-w-sm font-poppins text-slate-gray">({rating})</p>
      </div>

      <p className="my-4 text-center info-text">
        {feedback}
      </p>

      <div className="flex gap-2.5 items-center">
        <img
          src={imgURL}
          alt="customer"
          className="rounded-full border object-cover w-[50px] h-[50px]"
        />
        <h3 className="mt-1 font-comfortaa text-xl">{customerName}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
