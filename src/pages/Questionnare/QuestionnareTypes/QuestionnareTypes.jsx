import { useNavigate } from 'react-router-dom';
import styles from './QuestionnareTypes.module.css';
export default function QuestionnareTypes() {
  const navigate = useNavigate();
  return (
    <>
    <div className={`${styles.questionnareBg}`}>
         <h1 className="text-center text-6xl font-bold text-white w-[560px]">Find your new best friend</h1>
    </div>

      <h2 className='font-bold text-4xl tracking-wide text-center w-[580px] mx-auto'>What type of pet are you searching for?</h2>
   
      <div className='grid grid-cols-4 gap-10 px-28 my-10'>
           <div className='rounded-3xl border bodrer-[#ffc107] p-3' onClick={() => {
            navigate(`/questionnareLayout/questionnareQuestion/rabbit`)
           }}> 
           <img src="/rabbit.jpg" className='h-64 object-cover rounded-3xl' alt="rabbit"/>
           <p className='text-center font-semibold text-2xl mt-3' >Rabbit</p>
           </div>
           
           <div className='rounded-3xl border bodrer-[#ffc107] p-3'  onClick={() => {
            navigate(`/questionnareLayout/questionnareQuestion/cat`)
           }}>
           <img src="/cat.jpg"  className='h-64 object-cover rounded-3xl'  alt="rabbit"/>
           <p className='text-center font-semibold text-2xl mt-3'>Cats</p>
           </div>

            <div className='rounded-3xl border bodrer-[#ffc107] p-3'  onClick={() => {
            navigate(`/questionnareLayout/questionnareQuestion/dog`)
           }}>
            <img src="/dog.jpg" className='h-64 object-cover rounded-3xl' alt="rabbit"/>
            <p  className='text-center font-semibold text-2xl mt-3'>Dogs</p>
            </div>

            <div className='rounded-3xl border bodrer-[#ffc107] p-3'  onClick={() => {
            navigate(`/questionnareLayout/questionnareQuestion/horse`)
           }}>
            <img src="/horse.jpg" className='h-64 object-cover rounded-3xl'  alt="rabbit"/>
            <p className='text-center font-semibold text-2xl mt-3'>Horse</p>
            </div>
     </div>
    </>
  )
}
