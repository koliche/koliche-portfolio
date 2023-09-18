import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiBook2Line} from 'react-icons/ri'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav ===  '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ===  '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ===  '#experience' ? 'active' : ''}><RiBook2Line/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav ===  '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ===  '#contact' ? 'active' : ''}><BiMessageSquareDots/></a>
    </nav>
  )
}

// Use this to active the nav bar when scrolling ! 
// const Nav = () => {
//   const [activeNav, setActiveNav] = useState('#');

//   useEffect(() => {
//     // Function to handle scroll event
//     const handleScroll = () => {
//       // Determine the scroll position
//       const scrollY = window.scrollY || document.documentElement.scrollTop;

//       // Define the sections and their corresponding navigation links
//       const sections = {
//         '#': 0,
//         '#about': document.getElementById('about').offsetTop,
//         '#experience': document.getElementById('experience').offsetTop,
//         '#portfolio': document.getElementById('portfolio').offsetTop,
//         '#contact': document.getElementById('contact').offsetTop,
//       };

//       // Find the active section by comparing scroll position with section offsets
//       let activeSection = '#';
//       for (const section in sections) {
//         if (scrollY >= sections[section]) {
//           activeSection = section;
//         } else {
//           break;
//         }
//       }

//       // Update the active navigation item
//       setActiveNav(activeSection);
//     };

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav>
//       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
//       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
//       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBook2Line /></a>
//       <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
//       <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDots /></a>
//     </nav>
//   );
// };

export default Nav