import './style.css';

export default function AboutDifferentials() {
  return (
    <div className="bg-[#ffe4c3] about_differential_container px-40 py-20">
        <h2 className="text-center text-4xl font-bold text-[#000958]">Nuestros diferenciales</h2>
        <div className="grid grid-cols-3 gap-10 mt-16 align-middle about-differential_box">
             <div className="flex flex-col text-center gap-7 text-[#000958] hover:-translate-y-3" data-aos="fade-right"  data-aos-duration="1000">
                <img src="/aboutImgs/tec-qs1 (1).png" className="w-full" alt=""/>
                <p className="font-semibold">Trabajamos con la última tecnología para ofrecerte el mejor servicio.</p>
             </div>

             <div className="flex flex-col text-center gap-7 text-[#000958] hover:-translate-y-3" data-aos="fade-up"  data-aos-duration="1000">
                <img src="/aboutImgs/rec-qs2.png" alt=""/>
                <p  className="font-semibold">Nuestro innovador sistema de reconocimiento facial nos permite identificar de manera efectiva a la población canina, felina u otras mascotas de la casa.</p>
             </div>

             <div className="flex flex-col text-center gap-7 text-[#000958] hover:-translate-y-3" data-aos="fade-left" data-aos-duration="1000">
                <img src="/aboutImgs/lcat-qs3.png" alt=""/>
                <p  className="font-semibold">Pudiendo así trabajar sobre bases sólidas en su control. Pensamos en la tranquilidad y resguardo de los consentidos de casa.</p>
             </div>
        </div>
    </div>
  )
}
