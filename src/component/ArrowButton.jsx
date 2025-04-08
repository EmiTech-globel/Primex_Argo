import { slider_left_arrow, slider_right_arrow } from "../assets/icon"; 

const ArrowButton = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 
      bg-white rounded-full shadow-md 
      hover:bg-gray-100 transition-transform 
      hover:scale-105 focus:outline-none ring-2 ring-lima/40"
    >
      <img
        src={direction === "left" ? slider_left_arrow : slider_right_arrow}
        alt={`${direction}-arrow`}
        className="w-6 h-6"
      />
    </button>
  );
};

export default ArrowButton;
