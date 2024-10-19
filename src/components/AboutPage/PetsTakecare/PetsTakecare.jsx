import './style.css';

export default function PetsTakecare() {
  return (
    <div className="bg-[#ffe4c3] petscare-container flex relative gap-10 px-40 py-20">
            <img data-aos="fade-down" data-aos-duration="1000" loading="lazy" className="w-72 h-80 rounded-ss-[50px]  object-cover rounded-br-[50px]" src="/aboutImgs/istockphoto-1204670802-612x612.jpg"  alt="dog img"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" className="absolute rotate-45 pets-paw-1 left-10 top-72" viewBox="0 0 256 256"><path fill="#fff" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z"></path></svg>
            <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold ">Cómo cuidar a tus mascotas</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam eaque velit odit.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam, eos sed voluptates harum a necessitatibus doloribus nostrum! Nostrum ut accusantium</p>
                <button className="bg-[#fb5f30] text-white px-8 py-2 w-fit rounded-xl">descubrir más</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" className="absolute rotate-45 pets-paw-2 right-32" viewBox="0 0 256 256"><path fill="#fff" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z"></path></svg>
            <img data-aos="fade-up" data-aos-duration="1000" loading="lazy" src="/aboutImgs/andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg" alt="kitten" className="object-cover w-32 h-32 mt-40 rounded-ss-3xl rounded-br-3xl"/>
        </div>
  )
}


