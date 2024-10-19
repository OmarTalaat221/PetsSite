// export default function AdoptHomeText() {
//   return (
//     <div data-aos="fade-down"
//       data-aos-easing="linear"
//       data-aos-duration="1500" className="w-[580px] mx-auto p-4">
//       <h1 className="text-5xl font-bold text-center tracking-wides">
//         Cuidado inquebrantable para tu amiga peluda todos los días, todo el día!
//         {/* Unwavering Pet Care For Your Furry Friend Everyday,All Day! */}
//       </h1>
//       <div className="flex gap-5 mx-auto my-10 align-middle w-fit">
//         <button className="bg-[#1a1820] text-white py-2  px-8 rounded-3xl">
//           {/* Read more */}
//           Leer más
//         </button>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="#1a1820"
//           className="w-10 h-10 p-2 my-auto bg-white rounded-full shadow-xl"
//         >
//           <path
//             fillRule="evenodd"
//             d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
//             clipRule="evenodd"
//           />
//         </svg>
//         {/* <button className="text-[#1a1820]">Watch Video</button> */}
//         <button className="text-[#1a1820]">
//           Ver video
//         </button>
//       </div>
//     </div>
//   )
// }

import './style.css';

export default function AdoptHomeText() {
  return (
    <div data-aos="fade-down adopt-home-text"
      data-aos-easing="linear"
      data-aos-duration="1500" className="w-full max-w-3xl p-4 mx-auto">
      <h1 className="text-3xl font-bold tracking-wide text-center md:text-5xl">
        Cuidado inquebrantable para tu amiga peluda todos los días, todo el día!
        {/* Unwavering Pet Care For Your Furry Friend Everyday, All Day! */}
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 mx-auto my-10 md:flex-row">
        <button className="bg-[#1a1820] text-white py-2 px-8 rounded-3xl">
          {/* Read more */}
          Leer más
        </button>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#1a1820"
            className="w-10 h-10 p-2 bg-white rounded-full shadow-xl"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          {/* <button className="text-[#1a1820]">Watch Video</button> */}
          <button className="text-[#1a1820]">
            Ver video
          </button>
        </div>
      </div>
    </div>
  )
}
