import './style.css';

export default function AboutProgram() {
  return (
    <div className="about-program-container px-40 py-20 bg-[#FFE4C3]">
        <h2 className="text-center text-4xl font-bold text-[#000958]">Nuestros Programa</h2>
        <p className="text-lg text-center text-[#000958] my-3">Perseguimos el objetivo de disminuir la tasa de mascotas abandonadas en nuestro país, mediante la aplicación de tres medidas lo lograremos</p>
        <div className="grid grid-cols-3 gap-10 mt-12 about-program-boxes">
            <div className="relative about-program-box" data-aos="fade-right" data-aos-duration="500">
                <img src="/aboutImgs/esterilizacion.jpg" alt="about program img"/>
                <div className="p-3 font-medium text-center text-white about-program-text-box">
                Campañas de esterilización y castración de perros y gatos.
                </div>
            </div>

            <div className="relative about-program-box" data-aos="fade-up" data-aos-duration="500">
                <img src="/aboutImgs/educacion.jpg" alt="about program img"/>
                <div className="p-3 font-medium text-center text-white about-program-text-box">
                Implantación de campañas de educación y difusión.
                </div>
            </div>

            <div className="relative about-program-box" data-aos="fade-left" data-aos-duration="500">
                <img src="/aboutImgs/vacuna.jpg" alt="about program img"/>
                <div className="p-3 font-medium text-center text-white about-program-text-box">
                Salud animal mediante campañas de vacunación y desparasitación.
                </div>
            </div>
        </div>
    </div>
  )
}
