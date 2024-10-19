import "./style.css";
import lostImg from "../../../assets/images/lost_dog_3.webp";
import cert_per from "../../../assets/images/cert_person.png";

export default function NoNeedLostPets({ loading, aboutPage }) {
  return (
    <div className="no_need_container">
      <div className="nn_title">
        <p>No queremos más mascotas perdida</p>
        <p>y decidimos hacer un cambio</p>
      </div>

      <div className="no_need_page">
        <img src={aboutPage?.no_img} />
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: aboutPage?.no_txt,
            }}
          />
        </div>
      </div>
    </div>
  );
}
