// // src/components/Slider.js
// import React, { useState } from 'react';
// import mockData from '../mockData';

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     const newIndex = (currentIndex === 0) ? mockData.length - 3 : currentIndex - 3;
//     setCurrentIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = (currentIndex === mockData.length - 3) ? 0 : currentIndex + 3;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="relative w-full max-w-5xl mx-auto p-4">
//       <div className="flex overflow-hidden">
//         {mockData.slice(currentIndex, currentIndex + 3).map(item => (
//           <div key={item.id} className="flex-shrink-0 w-1/3 p-2">
//             <div className="border rounded-lg p-4">
//               <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
//               <h2 className="mt-2 text-lg font-bold">{item.name}</h2>
//               <p>{item.location}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={handlePrev}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default Slider;
