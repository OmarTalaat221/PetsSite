import "./style.css";
import two_girls_images from "../../../assets/images/two_girls.png";

export default function AboutResponsibility({ loading, aboutPage }) {
  return (
    <div className="about-responsibility-container">
      <div className="about-responsibility-page">
        <div className="about-responsibility-card">Responsabilidad social</div>
        <div dangerouslySetInnerHTML={{ __html: aboutPage?.res_tit }} />

        <div dangerouslySetInnerHTML={{ __html: aboutPage?.res_txt }} />
      </div>
      <img src={aboutPage?.res_img} alt="" />
    </div>
  );
}
