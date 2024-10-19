import './style.css';
import catImg from '../../../assets/images/tran-mau-tri-tam-wiqbi_Uyvx8-unsplash.jpg';
import dogImg from '../../../assets/images/joe-caione-qO-PIF84Vxg-unsplash.jpg';

export default function AbputMeetPets() {
  return (
    <div className="relative px-40 py-20 about_meet_container">
    <h2 className="text-center text-4xl font-bold text-[#000958] ">conocer a las mascotas</h2>
<svg xmlns="http://www.w3.org/2000/svg" className="about-meet-paw-1 absolute left-[470px] rotate-45  top-40" width="4em" height="4em" viewBox="0 0 256 256"><path fill="#ff5b2e" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" className=" about-meet-paw-2 absolute left-[650px] rotate-45  top-[600px]" width="4em" height="4em" viewBox="0 0 256 256"><path fill="#ff5b2e" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" className="about-meet-paw-3 absolute left-[100px] rotate-45  top-[860px]" width="4em" height="4em" viewBox="0 0 256 256"><path fill="#ff5b2e" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="2em" className="about-meet-paw-4 absolute right-20 top-44" height="2em" viewBox="0 0 256 256"><path fill="#ff5b2e" d="M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74a36 36 0 1 0-66.37 22.92a.3.3 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37a36 36 0 1 0 66.37-22.92v-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8a16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88a20 20 0 1 1-36.75 7.5a8 8 0 0 0-7.91-9.24a8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5a8 8 0 0 0 9.14 9.14a20 20 0 0 1 18.17 33Z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="2em" className="about-meet-paw-5 right-28 top-[600px] absolute" height="2em" viewBox="0 0 256 256"><path fill="#ff5b2e" d="M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74a36 36 0 1 0-66.37 22.92a.3.3 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37a36 36 0 1 0 66.37-22.92v-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8a16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88a20 20 0 1 1-36.75 7.5a8 8 0 0 0-7.91-9.24a8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5a8 8 0 0 0 9.14 9.14a20 20 0 0 1 18.17 33Z"></path></svg>
    <div className="grid grid-cols-2 about-meet-box gap-20 mx-auto my-10 align-middle">
        <img data-aos="fade-right" data-aos-duration="1000" loading="lazy" src={catImg} className="object-cover w-96 h-80"/>
        <div className="my-auto" data-aos="fade-left" data-aos-duration="1000">
            <h4 className="text-3xl font-semibold text-[#000958]">Leen</h4>
            <p className="my-5 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut labore eius voluptatibus iusto fuga est tempore placeat odio delectus nobis nam adipisci, error ducimus illum corporis, dolorem, quod vel qui..</p>
            <button className="text-[#ff5b2e] font-bold text-xl rounded-xl">View More Cats</button>
        </div>
    </div>

    <div className="grid grid-cols-2 about-meet-box gap-20 mx-auto my-20 align-middle">
    <div className="my-auto last-meet-text" data-aos="fade-left" data-aos-duration="1000">
            <h4 className="text-3xl font-semibold text-[#000958]">Leen</h4>
            <p className="my-5 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem delectus excepturi eligendi eos illum qui, rerum vero molestias quam nostrum tempora laborum esse ullam? Alias consequatur exercitationem consectetur voluptatem enim.</p>
            <button className="text-[#ff5b2e] font-bold text-xl rounded-xl">View More Cats</button>
        </div>
        <img data-aos="fade-right" data-aos-duration="1000" loading="lazy" src={dogImg} className="object-cover h-80 last-meet-img"/>
        
    </div>

</div>
  )
}
