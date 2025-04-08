import { useEffect, useState } from "react";
import { logo } from "../assets/images";
import { navLinks } from "../constant";
import { close_large, hamburger } from "../assets/icon"; // Your custom icons

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const toggleNav = () => setOpenNav(!openNav);
  const closeNav = () => setOpenNav(false);

  const handleNavClick = (href) => {
    setActiveSection(href);
    closeNav(); // Close mobile menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);

      // Update active section on scroll
      const sections = document.querySelectorAll("section[id]"); // Select all sections with id
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 py-6 px-5 md:px-[64px] transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md shadow-xl " : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between container-f m-auto">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-20">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-comfortaa leading-normal relative text-lg transition-all duration-300 text-white 
                  after:content-[''] after:absolute after:left-0 after:bottom-[-0.3rem]
                  after:h-[3px] after:bg-lima after:transition-[width] after:duration-300
                  ${
                    activeSection === item.href
                      ? "after:w-[60%]"
                      : "text-white/50 after:w-0 hover:text-white hover:after:w-[60%]"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden max-lg:block" onClick={toggleNav}>
          <img src={hamburger} alt="Menu" width={25} height={25} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md transition-transform duration-500 ${
          openNav ? "translate-y-0" : "-translate-y-full"
        } flex flex-col items-center justify-center`}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6" onClick={closeNav}>
          <img src={close_large} alt="Close" width={25} height={25} />
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-lg transition-all duration-300 text-white 
                  after:content-[''] after:absolute after:left-0 after:bottom-[-0.3rem]
                  after:h-[3px] after:bg-lima after:transition-[width] after:duration-300
                  ${
                    activeSection === item.href
                      ? "after:w-[60%]"
                      : "text-white/50 after:w-0 hover:text-white hover:after:w-[60%]"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
