// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const Cursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);

//     window.addEventListener('mousemove', updateMousePosition);

//     // Add event listeners to interactive elements
//     const interactiveElements = document.querySelectorAll('a, button, input, textarea, [data-cursor="pointer"]');
//     interactiveElements.forEach(el => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       interactiveElements.forEach(el => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   });

//   return (
//     <>
//       {/* Main cursor dot */}
//       <motion.div
//         className="fixed w-2 h-2 pointer-events-none z-[9999] mix-blend-difference"
//         animate={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//         }}
//         transition={{ type: "spring", stiffness: 2000, damping: 70, mass: 0.5 }}
//       >
//         <div className={`w-full h-full bg-black rounded-full transition-transform duration-150 ${
//           isHovering ? 'scale-150' : 'scale-100'
//         }`} />
//       </motion.div>
//     </>
//   );
// };

// export default Cursor;