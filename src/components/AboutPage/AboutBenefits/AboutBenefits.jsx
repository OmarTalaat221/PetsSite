// import "../AboutDifferentials/style.css";
import './style.css';

export default function AboutBenefits() {
    return (
        <div className="px-40 py-20 about-benefit_container">
            <h2 className="text-center text-4xl font-bold text-[#000958]">Nuestros beneficios</h2>
            <div className="grid grid-cols-3 gap-10 mt-10 about-benefits_box">
                <div className="flex flex-col text-center gap-7 text-[#000958] hover:-translate-y-3" data-aos="fade-right" data-aos-duration="1000">
                    <img src="/aboutImgs/B1.png" alt="benefit img" />
                    <p className="font-semibold">El usuario puede agregar toda la información detallada de su mascota ádemas de agregar las fotos necesarias para el reconocimiento facial.</p>
                </div>

                <div className="flex flex-col text-center gap-7 text-[#000958] hover:-translate-y-3" data-aos="fade-up" data-aos-duration="1000">
                    <img src="/aboutImgs/B2.png" alt="benefit img" />
                    <p className="font-semibold">El usuario puede agregar toda la información detallada de su mascota ádemas de agregar las fotos necesarias para el reconocimiento facial.</p>
                </div>

                <div className="flex flex-col text-center gap-7 text-[#000958] hover:-translate-y-3" data-aos="fade-left" data-aos-duration="1000">
                    <img src="/aboutImgs/B3.png" alt="benefit img" />
                    <p className="font-semibold">El usuario puede agregar toda la información detallada de su mascota ádemas de agregar las fotos necesarias para el reconocimiento facial.</p>
                </div>

                <div className="flex flex-col text-center gap-7 text-[#000958] hover:-translate-y-3" data-aos="fade-right" data-aos-duration="1000">
                    <img src="/aboutImgs/B4.png" alt="benefit img" />
                    <p className="font-semibold">Nuestros convenios ofrecen descuentos y servicios a los registrados que presenten la identificación RUMP en los establecimientos que tienen este acuerdo con nosotros.

                    </p>
                </div>

                <div className="flex flex-col text-center gap-7 text-[#000958] hover:-translate-y-3" data-aos="fade-down" data-aos-duration="1000">
                    <img src="/aboutImgs/B5.png" alt="benefit img" />
                    <p className="font-semibold">El usuario podra registrar cada cita médica , tratamiento y medicación con la que su mascota haya sido recetada. Y llevar al detalle cada registro de citas.</p>
                </div>

                <div className="flex flex-col text-center gap-7 text-[#000958] hover:-translate-y-3" data-aos="fade-left" data-aos-duration="1000">
                    <img src="/aboutImgs/B6.png" alt="benefit img" />
                    <p className="font-semibold">Próximamente una nueva app. Estamos trabajando para el mejor desarrollo para el beneficio de nuestros usuarios.</p>
                </div>
            </div>
        </div>
    )
}
