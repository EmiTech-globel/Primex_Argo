import { questions } from "../constant"
import Button from "../component/Button"

const FrequentlyAskedQuestions = () => {
  return (
    <section className="w-full section container-f 
    py-10 lg:pt-20 lg:pb-24">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-right">        
        <h2 className="mb-4">FAQs</h2>
        <p className="info-text mb-12 pr-15">
          Find answers to common questions about our services and agricultural products.
        </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((item, index) => (
            <div 
            key={item}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay={index * 150}

            >
              <h3 className="text-lg font-bold mb-2">{item.question}</h3>
              <p className="info-text pr-20">{item.answer}</p>
            </div>
          ))}
        </div>

        <div data-aos="fade-right" className="text-left mt-16">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="info-text mb-10">We're here to help you!</p>
         <Button 
           label='Contact' 
           href='#contact' 
           backgroundColor="bg-transparent" 
           textColor="text-neutral-dark" 
           borderColor="border-neutral-dark" 
         />
        </div>
      </div>
    </section>
  )
}

export default FrequentlyAskedQuestions