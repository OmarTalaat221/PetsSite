import './style.css';

export default function AdoptExploreCard({ setIsOpenModal }) {
  return (
    <div className="bg-[#96a82f] adopt-explore-card relative w-full my-32 flex justify-between px-28 rounded-3xl h-64">
      <img loading="lazy" src="/Screenshot_2024-05-26_164640-removebg-preview.png" className="absolute bottom-0 -top-13 w-80" alt="" />
      <div className="absolute right-20 top-10 adopt-explore-text">
        <h3 className="text-5xl font-bold">Nueva mascota en casa?</h3>
        <p className="mt-3 text-lg font-medium">Encuentre todo lo que necesita para comenzar.</p>
        <button onClick={() => {
          setIsOpenModal(true)
        }} style={{ border: "1px solid rgb(43,28,19)" }} className="my-5 flex w-fit p-2 rounded-xl text-white bg-[rgb(43,28,19)]">Vamos a explorar</button>
      </div>
    </div>
  )
}