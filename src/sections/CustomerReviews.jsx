import ReviewCard from "../component/ReviewCard"
import { reviews } from "../constant"


const CustomerReviews = () => {
  return (
    <section className="container-f section bg-white 
    py-10 pb-14 lg:pt-10 lg:pb-24">
      <div 
      data-aos="fade-down"
      className="justify-center items-center text-center"
      >
      <h2 className="text-4xl">
        What Our
        <span className="text-lima"> Customers </span>
        Say?
      </h2>
      <p className="info-text my-6 md:px-30">
        We take pride in our commitment to quality and customer satisfaction.
        Here’s what some of our customers have to say about their experience with us.
      </p>
      </div>
      
      <div className="gap-9 grid lg:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName} 
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews