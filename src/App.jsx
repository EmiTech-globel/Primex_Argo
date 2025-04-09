import { Hero, Contact, About, Services, PopularProducts, CustomerReviews, FrequentlyAskedQuestions, Footer, } from './sections';
import { useEffect } from 'react';
import AOS from 'aos';
import Nav from './component/Nav';
import BackToTop from './component/BackToTop';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,  // Animation duration (To adjust speed)
      once: true,      // Animate only once
      delay: 300,    // Animation delay (To adjust delay)
      // offset: '30px', // Distance from the original position

    });
  }, []);
  return (
    <main className='overflow-hidden'>
       <Nav /> 
      <section >
        <Hero />
      </section>

      <section>
        <About />
      </section>
      
      <section>
        <Services />
      </section>

      <section>
        <PopularProducts />
      </section>

      <section>
        <CustomerReviews />
      </section>

      <section>
        <FrequentlyAskedQuestions />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>

      <BackToTop />
    </main>
  )
}

export default App
