import "./style.css";
import pawImg from "../../../assets/images/about-benefit-1.avif";
import veterinaryhealthImg from "../../../assets/images/about-benefit-2.avif";
import offersImg from "../../../assets/images/about-benefit-3.avif";
import satelliteImg from "../../../assets/images/about-benefit-4.avif";
import partyImg from "../../../assets/images/about-benefit-5.avif";

export default function AboutBenefits() {
  return (
    <div className="about_benefit_container">
      <h1>
        Los <span>beneficios</span> de{" "}
      </h1>
      <h1>registrarte con nosotros</h1>

      <div className="about_benefit_page">
        <div className="about_benefit_card">
          <div className="about_benefit_card_img">
            <p>paw icon -&gt;</p>
            <img src={pawImg} />
          </div>
          <div className="about_benefit_card_text">
            <p>Info detallada de la mascota</p>
            <p>
              El usuario puede agregar toda la información detallada necesaria,
              tanto para el contacto de los responsables como la información
              médica de la mascota
            </p>
          </div>
        </div>

        <div className="about_benefit_card">
          <div className="about_benefit_card_img">
            <p>veterinary health icon -&gt;</p>
            <img src={veterinaryhealthImg} />
          </div>
          <div className="about_benefit_card_text">
            <p>Historial de vacunas y tratamientos</p>
            <p>
              El usuario podra registrar eventos como citas médicas, chequeos,
              visitas al spa, vacunas, etc. Así podrá llevar un seguimiento del
              cuidado y los cambios en la salud de la mascotita
            </p>
          </div>
        </div>

        <div className="about_benefit_card">
          <div className="about_benefit_card_img">
            <p>offers icon -&gt;</p>
            <img src={offersImg} />
          </div>
          <div className="about_benefit_card_text">
            <p>Descuentos y ofertas</p>
            <p>
              Nuestros convenios ofrecen descuentos y servicios a los clientes
              que presenten su DNI RUMP vigente en los establecimientos que
              tienen este acuerdo con nosotros
            </p>
          </div>
        </div>

        <div className="about_benefit_card">
          <div className="about_benefit_card_img">
            <p>satellite icon -&gt;</p>
            <img src={satelliteImg} />
          </div>
          <div className="about_benefit_card_text">
            <p>Innovación tecnológica</p>
            <p>
              Constantemente implementamos mejoras en nuestro sistema de
              registro e identificación. Estamos trabajando en nuevas
              actualizaciones nunca antes vistas en el mercado nacional
            </p>
          </div>
        </div>

        <div className="about_benefit_card">
          <div className="about_benefit_card_img">
            <p>party icon -&gt;</p>
            <img src={partyImg} />
          </div>
          <div className="about_benefit_card_text">
            <p>Actividades, sorteos y eventos</p>
            <p>
              Participa de nuestros eventos, sorteos y actividades virtuales y
              presenciales. Todos los meses desarrollamos una dinámica.
              Escríbenos y consulta cuál está vigente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
