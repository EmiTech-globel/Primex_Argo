import {  facebook, instagram, telegram, whatsapp } from '../assets/icon';
import { cassava, cocoa, cray_fish, millet, red_palm_oil, service_1, service_2, service_3, service_4, service_5, customer_1, customer_2,} from '../assets/images';

export const navLinks = [
  { href: "#home", id: 'home', label: 'Home' },
  { href: "#about", id: 'about', label: 'About' },
  { href: "#services", id: 'services', label: 'Our Services' },
  { href: "#products", id: 'products', label: 'Products' },
  { href: "#contact", id: 'contact', label: 'Contact' },
];

export const statistics = [ 
    {value: '5k+', label: 'Happy Customers'},
    {value: '100+', label: 'Products Sold'},
];

export const products = [
    {
        imgURL: cocoa,
        name: 'Cocoa Fruit',
        price: '₦700',
    },

    {
        imgURL: cassava,
        name: 'Cassava',
        price: '₦5000',
    },

    {
        imgURL: red_palm_oil,
        name: 'Red Palm Oil',
        price: '₦1500',
    },

    {
        imgURL: cray_fish,
        name: 'Cray Fish',
        price: '₦3000',
    },
    
    {
        imgURL: millet,
        name: 'Millet',
        price: '₦2000',
    },
];

export const services = [
{    
    imgURL: service_1,
    title: "Unmatched Quality Assurance for Our Clients",
    description: 'We deliver fresh, well-processed, and standardized products.',
    highlightWords: ["Quality", "Assurance"]
},

{    
    imgURL: service_2,
    title: "Streamlined Supply Chain from Farm to Table",
    description: 'Our supply chain ensures a smooth process from farm to delivery.',
    highlightWords: ["Supply", "Chain"]
},

{
    imgURL: service_3,
    title: "Expertise in Global Trade and Logistics",
    description: 'We navigate export logistics and international trade regulations with ease.',
    highlightWords: ["Global", "Trade"]
},

{
    imgURL: service_4,
    title: "Fair Pricing for Quality Products",
    description: 'We offer competitive prices without compromising quality.',
    highlightWords: ["Fair", "Pricing"]
},

{
    imgURL: service_5,
    title: "Empowering Agriculture with Sustainable and Ethical Practices",
    description: 'We prioritize sustainability and ethical practices in agriculture.',
    highlightWords: ["Sustainable", "Ethical"]    
}
];

export const reviews = [
    {
        imgURL: customer_2,
        customerName: 'John Doe',
        rating: 4.5,
        feedback: "The quality of products and service is unmatched!"
    },
    {
        imgURL: customer_1,
        customerName: 'Jane Smith',
        rating: 4.3,
        feedback: "Their commitment to quality is evident in every shipment."
    }
];

export const questions = [
    {
        question: 'How do I place an order?',
        answer: 'You can place an order by contacting us through our website or social media channels.'
    },

    {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including bank transfers and mobile payments.'
    },

    {
        question: 'How long does shipping take?',
        answer: 'Shipping times vary based on location, but we aim to deliver within 5-7 business days.'
    },

    {
        question: 'Can I track my order?',
        answer: 'Yes, once your order is shipped, you will receive a tracking number via email.'
    },

    {
        question: 'What is your return policy?',
        answer: 'We accept returns within 30 days of delivery if the product is in its original condition.'
    },

    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping to select countries.',
    },
];

export const contact = [
    {
        imgURL: telegram,
        href: 'http://t.me/Primex_Agro',
    },
    {
        imgURL: whatsapp,
        href: "https://api.whatsapp.com/send?phone=2348143006981&text=Hello%20there!%20I'm%20interested%20in%20your%20services",
    },
    {
        imgURL: facebook,
        href: 'https://www.facebook.com/profile.php?id=61574069986169',
    },
];

export const footerLinks = [
    {
        src: facebook,
        href: 'https://www.facebook.com/profile.php?id=61574069986169',
        alt: 'Facebook',
    },  

    {
        src: instagram,
        href: 'https://www.instagram.com/primex_agro?igsh=MTl0OXZwaXpyYWJhaw==',
        alt: 'Instagram',
    },

    {
        src: telegram,
        href: 'http://t.me/Primex_Agro',
        alt: 'Telegram',
    },
];
