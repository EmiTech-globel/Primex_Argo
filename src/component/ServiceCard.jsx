import { services } from "../constant";

const ServiceCard = () => {
  return (
    <div className="relative flex gap-10">
      {services.map((service, index) => (
        <div
          key={service.title}
          data-aos="fade-up" 
          data-aos-delay={index * 150} // <-- this will stagger them nicely
          className="min-w-[270px] md:min-w-[300px] bg-white rounded-xl h-auto
            shadow-lg p-1 border"
        >
          <img
            src={service.imgURL}
            alt={service.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-gray-900 mt-4">
            {service.title.split(" ").map((word, i) =>
              service.highlightWords.includes(word) ? (
                <span key={i} className="text-lima">{word} </span>
              ) : (
                word + " "
              )
            )}
          </h3>
          <p className="info-text mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
