
import { FaLock, FaRegEnvelope } from 'react-icons/fa6';
// import forgetPasswrodImg from '../../assets/images/Secure data-cuate.png';
import './style.css'
import { Check } from '../../assets/svgIcons';
import { useNavigate } from 'react-router-dom';

export default function SendResetCodePage() {

  const navigate = useNavigate()


    return (
      <div className='forget-password'>
      <div className="px-10 py-10 mx-auto my-20 bg-white forget-password-contaainer rounded-xl w-fit">
          <FaLock className='w-32 mx-auto mb-10 text-[#ee701e] text-5xl'/>
          <div>
          <h2 className="text-[#ee701e] font-extrabold text-4xl text-center">Consultar su correo electrónico</h2>
          <p className="my-6 font-bold">Escribe el código que te enviamos</p>
          <form>
              <div className="flex flex-col">
                  <div className='flex gap-2 align-middle input-group'>
                  {/* <FaRegEnvelope  className='my-auto'/> */}

                      <div className='my-auto'>
                          {Check}
                      </div>

                  <input type="email" placeholder="Correo electrónico" />
                  
                  </div>
              </div>

             
              <div className="flex gap-6 mt-10">
                  <button className="bg-[#ee701e] text-white px-6 py-3 rounded-full h-fit send-btn" onClick={()=>navigate("/resetpassword")}>Restablecer la contraseña</button>
                  <button className="font-bold underline">Cancelar</button>
              </div>
          </form>
          </div>
      </div>
      </div>
    )
}