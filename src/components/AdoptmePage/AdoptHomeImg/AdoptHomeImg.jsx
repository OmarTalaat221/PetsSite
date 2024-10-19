// export default function AdoptHomeImg() {
//   return (
//     <div className="flex justify-center w-full mx-auto align-middle gap-7">
//       <div data-aos="fade-right" data-aos-offset="200"  data-aos-duration="1500"><img loading="lazy" src="/Untitled design (26) (2).png" className="object-cover w-72" alt="cat image"/></div>
//       <div data-aos="flip-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><img loading="lazy"src="/Untitled design (25).png" className="object-cover w-72" alt="cat image"/></div> 
//          <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="1500"><img loading="lazy" src="/Untitled design (24) (2).png"  className="object-cover w-72"alt="cat image"/></div>
//       </div>
//   )
// }

import './style.css';

export default function AdoptHomeImg() {
  return (
    <div className="flex flex-col justify-center w-full p-4 mx-auto align-middle md:flex-row gap-7 adopt-home-img">
      <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1500">
        <img loading="lazy" src="/Untitled design (26) (2).png" className="object-cover w-full md:w-72" alt="cat image" />
      </div>
      <div data-aos="flip-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <img loading="lazy" src="/Untitled design (25).png" className="object-cover w-full md:w-72" alt="cat image" />
      </div>
      <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="1500">
        <img loading="lazy" src="/Untitled design (24) (2).png" className="object-cover w-full md:w-72" alt="cat image" />
      </div>
    </div>
  )
}
