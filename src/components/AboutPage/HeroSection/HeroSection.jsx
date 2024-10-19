import './style.css';

export default function HeroSection() {
    return (
        <div className="bg-[#ffe4c3] px-24 py-20 about-hero-container">
            <div className="grid grid-cols-2 gap-10 about-hero-grid">
                <div className="my-10 about-hero-text-box">
                    <h1 className="text-6xl tracking-wide font-extrabold text-[#000958] w-[500px]">Las mascotas también tienen sentimientos</h1>
                    <p className="my-6 text-lg text-gray-500">Somos un servicio profesional de identificación de mascotas, el cual permite conocer el estado actual de la población canina, felina y otros compañeros de vida. De esta manera podemos trabajar sobre bases sólidas en su control.Proporcionamos servicios a todo el Perú gracias a nuestros más de 300 convenios con establecimientos para mascotas donde pueden acercarse para identificar a sus mascotas</p>
                    <div className="flex gap-8 my-8 align-middle hero-btns">
                        <button className="bg-[#ff5b2e] px-7 py-2 rounded-full text-white">Get Started</button>
                        <button className="flex gap-2 align-middle">
                            <div className="w-10 h-10 border-2 border-[#fb5f30] rounded-full flex justify-center align-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fb5f30" className="my-auto size-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <span className="my-auto text-gray-500">Play Video</span>
                        </button>
                    </div>

                    <div className="flex my-10 align-middle gap-28 hero-btns">
                        <div className="flex flex-col">
                            <h2 className="text-[#000958] font-extrabold text-3xl">2K+</h2>
                            <p className="text-lg text-gray-500">Veterin</p>
                        </div>

                        <div>
                            <h2 className="text-[#000958] font-extrabold text-3xl">10K+</h2>
                            <p className="text-lg text-gray-500">Helped Pets</p>
                        </div>
                    </div>
                </div>
                <div className="relative about-hero-img-box left-8 bg-[#fdb6a0] flex justify-center align-middle rounded-full w-[500px] h-[500px]">
                    <div className="absolute top-7  bg-[#f8a69a] w-[450px] h-[450px] rounded-full "></div>
                    <div className="absolute top-16  bg-[#dfa5a1] w-[380px] h-[380px] rounded-full "></div>
                    <img loading='lazy' className="absolute right-5" src="/aboutImgs/Screenshot_2024-06-03_180249-removebg-preview.png" alt="" />
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="2em" className="absolute hero-paw-4 left-10 top-80" height="2em" viewBox="0 0 256 256"><path fill="#ea8000" d="M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74a36 36 0 1 0-66.37 22.92a.3.3 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37a36 36 0 1 0 66.37-22.92v-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8a16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88a20 20 0 1 1-36.75 7.5a8 8 0 0 0-7.91-9.24a8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5a8 8 0 0 0 9.14 9.14a20 20 0 0 1 18.17 33Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" className="absolute hero-paw-3 left-[600px] top-96 rotate-12" height="2em" viewBox="0 0 256 256"><path fill="#ea8000" d="M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74a36 36 0 1 0-66.37 22.92a.3.3 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37a36 36 0 1 0 66.37-22.92v-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8a16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88a20 20 0 1 1-36.75 7.5a8 8 0 0 0-7.91-9.24a8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5a8 8 0 0 0 9.14 9.14a20 20 0 0 1 18.17 33Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative hero-paw-2  bottom-[800px] left-72 rotate-90" width="3em" height="3em" viewBox="0 0 256 256"><path fill="#fff" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute hero-paw-1 top-[530px] left-96" width="3em" height="3em" viewBox="0 0 256 256"><path fill="#fff" d="M240 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28a28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14a44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82A40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13a64.1 64.1 0 0 1 48.87 0a40 40 0 0 0 34.73-72Z"></path></svg>
            </div>
        </div>
    )
}
