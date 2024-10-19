import './style.css';
export default function AboutInfo() {
  return (
    <div className="about-info">
        <svg className="-mt-52" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,160L40,165.3C80,171,160,181,240,176C320,171,400,149,480,165.3C560,181,640,235,720,224C800,213,880,139,960,133.3C1040,128,1120,192,1200,197.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
         <div className="flex bg-white justify-between gap-5 px-40 pb-20 align-middle about_info_container">
            <div className="oval-bg w-[300px] h-[300] rounded-full" data-aos="fade-right" data-aos-duration="1000">
                <img loading='lazy' src="/aboutImgs/Screenshot_2024-06-05_163110-removebg-preview.png" alt="about image"/>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="w-[450px] pb-20 relative aboutInfo-text-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" className="absolute top-[0.5px] left-3" viewBox="0 0 256 256"><path fill="#ff5b2e" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z"></path></svg>
              <div className="absolute pb-20  aboutInfo-text-box">
              <h2 className="font-extrabold text-4xl my-3 text-[#000958]">Nuestra pasión es brindar un cuidado superior para mascotas</h2>
                <p className="text-gray-600 text-[15px]">Somos un servicio profesional de identificación de mascotas, el cual permite conocer el estado actual de la población canina, felina y otros compañeros de vida. De esta manera podemos trabajar sobre bases sólidas en su control.Proporcionamos servicios a todo el Perú gracias a nuestros más de 300 convenios con establecimientos para mascotas donde pueden acercarse para identificar a sus mascotas.
               </p>
                <div className="flex about-info-list justify-between gap-3 align-middle my-7 text-[#000958]">
                   <div className="flex flex-col gap-3">
                     <p>
                        <span className="font-bold">Soporte 24 horas al día, 7 días a la semana</span>
                     </p>

                     <p>
                        <span className="font-bold">Centro de salud para mascotas</span>
                     </p>

                     <p>
                        <span className="font-bold">Garantía de devolución de dinero</span>
                     </p>
                   </div>
                   
                   <div className="flex flex-col gap-3">
                     <p>
                        <span className="font-bold">Personalizar la atención</span>
                     </p>

                     <p>
                        <span className="font-bold">Entrega rápida</span>
                     </p>

                     <p>
                        <span className="font-bold">El precio más bajo</span>
                     </p>
                   </div>
                </div>

                <button className="bg-[#ff5b2e] text-white px-8 py-2 rounded-full">Compra ahora</button>
              </div>
            </div>
         </div>
        </div>
  )
}
