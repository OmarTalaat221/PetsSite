import styles from "./Adobt.module.css";
import { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Questions from '../../components/Questions/Questions';
import { results, filteredResult } from "../../utils/questions";
import AdoptExploreCard from "../../components/AdoptmePage/AdoptExploreCard/AdoptExploreCard";
import AdoptInfo from "../../components/AdoptmePage/AdoptInfo/AdoptInfo";
import AdoptHomeImg from "../../components/AdoptmePage/AdoptHomeImg/AdoptHomeImg";
import AdoptHomeText from "../../components/AdoptmePage/AdoptHomeText/AdoptHomeText";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isShowData, setIsShowData] = useState(false);
   const [showSearchResult, setShowSearchResult] = useState(false);
   const [filtereData, setFilteredData] = useState(filteredResult);
   const [partOfFilteredData, setPartOfFilteredData] = useState(filtereData.slice(0, 10))
   const sectionRef = useRef();
   const [answers, setAnswers] = useState({
      objE: {
         SEXO: "Todos", // gender
         CALIFICACION: "Todos", // qualification
         TIPO: "Felino", // type
         TAMANO: "Todos", // size,
         RAZA: 0,
      },
   });

   useEffect(() => {
      if (isOpenModal) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }
   }, [isOpenModal])

   useEffect(() => {
      const handleKeyDown = (e) => {
         if (e.key === "Escape") {
            setIsOpenModal(false);
         }
      }
      document.addEventListener('keydown', handleKeyDown);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
      }
   }, [isOpenModal]);

   function handleFindData() {
      setIsShowData(false);
      setShowSearchResult(true);
      setFilteredData(filteredResult.filter(data =>
         (data.CALIFICACION === answers.objE.CALIFICACION) &&
         (data.SEXO === answers.objE.SEXO) &&
         (data.TAMANO === answers.objE.TAMANO) &&
         (data.TIPO === answers.objE.TIPO)
      ));
   }

   const fetchMoreData = () => {
      const start = partOfFilteredData.length;
      const end = start + 10;
      const newItem = results.slice(0, end);
      setPartOfFilteredData(newItem);
   };

   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);

   return (
      <>
         {isOpenModal && (
            <Modal isOpenModal={isOpenModal} setIsOpen={setIsOpenModal}>
               <div className="relative p-1 border border-black rounded-lg w-fit top-5 left-5 adopt-modal-container" onClick={() => { setIsOpenModal(false) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="size-4">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
               </div>
               <Questions
                  setShowSearchResult={setShowSearchResult}
                  setIsModalOpen={setIsOpenModal}
                  isOpenModal={isOpenModal}
                  isShowData={isShowData}
                  setIsShowData={setIsShowData}
                  answers={answers}
                  setAnswers={setAnswers}
               />
            </Modal>
         )}
         <div className={`px-4 py-4 md:px-20 ${styles.adoptPage}`}>
            <AdoptHomeText className="adopt-home-text" />
            <AdoptHomeImg className="adopt-home-img" />
            <AdoptInfo className="adopt-info" />

            <img loading="lazy" src="/adobtImgs/paw-removebg-preview.png" alt="Paw Image" className="relative w-20 left-[50%] transform -translate-x-1/2 top-20" />
            <img loading="lazy" src="/adobtImgs/paw-removebg-preview.png" alt="Paw Image" className="relative w-16 left-[45%] transform -translate-x-1/2 top-[100px]" />
            <AdoptExploreCard setIsOpenModal={setIsOpenModal} className="adopt-explore-card" />

            {(isShowData || showSearchResult) && (
        
               <div className={`grid gap-10 ${styles.resultBox}`} ref={sectionRef}>
  <div className={`bg-[#cde7dd] mt-7 h-fit rounded-xl p-4 ${styles.stickyFilter}`}>
    <div>
      <h2 className="my-2 text-lg font-semibold">Gender</h2>
      <select
        value={answers.objE.SEXO}
        onChange={(e) => setAnswers({ ...answers, objE: { ...answers.objE, SEXO: e.target.value } })}
        className="w-full px-3 py-2 rounded-md"
      >
        <option value="Todos">Todos</option>
        <option value="Macho">Macho</option>
        <option value="Hembra">Hembra</option>
      </select>
    </div>
    <div>
      <h2 className="my-2 text-lg font-semibold">Type</h2>
      <select
        value={answers.objE.TIPO}
        onChange={(e) => setAnswers({ ...answers, objE: { ...answers.objE, TIPO: e.target.value } })}
        className="w-full px-3 py-2 rounded-md"
      >
        <option value="Ave">Ave</option>
        <option value="Canino">Canino</option>
        <option value="Felino">Felino</option>
        <option value="marsupial">Marsupial</option>
        <option value="rodent">Rodent</option>
        <option value="Lagomorfo">Lagomorfo</option>
      </select>
    </div>
    <div>
      <h2 className="my-2 text-lg font-semibold">Qualification</h2>
      <select
        value={answers.objE.CALIFICACION}
        onChange={(e) => setAnswers({ ...answers, objE: { ...answers.objE, CALIFICACION: e.target.value } })}
        className="w-full px-3 py-2 rounded-md"
      >
        <option value="all">Todos</option>
        <option value="Agresivo">Agresivo</option>
        <option value="Amistoso">Amistoso</option>
        <option value="Discapacitado">Discapacitado</option>
        <option value="Entrenado">Entrenado</option>
        <option value="Miedoso">Miedoso</option>
        <option value="peleador">peleador</option>
      </select>
    </div>
    <div>
      <h2 className="my-2 text-lg font-semibold">Size</h2>
      <select
        value={answers.objE.TAMANO}
        onChange={(e) => setAnswers({ ...answers, objE: { ...answers.objE, TAMANO: e.target.value } })}
        className="w-full px-3 py-2 rounded-md"
      >
        <option value="Todos">Todos</option>
        <option value="Grande">Grande</option>
        <option value="Chico">Chico</option>
        <option value="Mediano">Mediano</option>
      </select>
    </div>
    <button onClick={handleFindData} className="bg-[#0d563a] text-white py-2 px-10 mx-auto mt-3 flex rounded-md">
      Find
    </button>
  </div>

  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {(isShowData ? results : filtereData).map((data, index) => (
      <div key={index} data-aos="zoom-in" data-aos-duration="400" className="px-3 py-3 shadow-md rounded-xl">
        <img
          src={data.FOTO ? data.FOTO : '/noPets.png'}
          alt="Pet img"
          className="object-cover w-full mt-3 rounded-xl h-44"
        />
        <div>
          <div className="flex justify-between align-middle">
            <div className="flex flex-col mt-2">
              <h2 className="text-lg font-bold">{data.TIPO}</h2>
              <p className="text-[14px] text-gray-400">{data.TAMANO}</p>
            </div>
            <img
              loading="lazy"
              src={`${data.SEXO === "Macho" ? '/noun-male-33316.png' : 'download__3_-removebg-preview.png'}`}
              alt="Gender Icon"
              className="w-5 h-5 mt-5"
            />
          </div>
          <div
            style={{ backgroundColor: data.COLOR, border: `1px solid ${data.COLOR}` }}
            className="flex w-5 h-5 mt-3 overflow-hidden rounded-full"
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

            )}
         </div>
      </>
   );
}

