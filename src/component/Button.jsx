
const Button = ({ label, backgroundColor, borderColor, textColor, href }) => {
    return href ? ( 
      <a href={href} 
      className={`justify-center items-center
          px-7 py-4 border-2 font-poppins text-lg leading-none
          ${
            backgroundColor
              ? `${backgroundColor} ${textColor} ${borderColor}`
              : "bg-lima border-none text-white  shadow-[0px_0px_10px_#2cce18] hover:shadow-[0px_0px_15px_#2cce18]"
          } rounded-full`}
        >
          {label}
      </a>
    ) : (
      <button className={`justify-center items-center
        px-7 py-4 border-2 font-poppins text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-lima border-none text-white  shadow-[0px_0px_10px_#2cce18] hover:shadow-[0px_0px_15px_#2cce18]"
        } rounded-full`}
      >
        {label}

      </button>
    );
  };
  
  export default Button;
  