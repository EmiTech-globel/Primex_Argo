import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-green-600
        text-white p-3 rounded-full shadow-lg 
        hover:bg-green-700 hover:-translate-y-1.5 transition-all duration-300"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default BackToTop;
