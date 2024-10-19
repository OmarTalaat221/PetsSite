
import { FaLock, FaRegEnvelope } from 'react-icons/fa6';
// import forgetPasswrodImg from '../../assets/images/Secure data-cuate.png';
import './style.css'
import { Check , PasswordIcon_1} from '../../assets/svgIcons';
import { useNavigate } from 'react-router-dom';

export default function ResetPasswordPage() {

  const navigate = useNavigate()


    return (
      <div className='forget-password'>
      <div className="px-10 py-10 mx-auto my-20 bg-white forget-password-contaainer rounded-xl w-fit">
          <FaLock className='w-32 mx-auto mb-10 text-[#ee701e] text-5xl'/>
          <div>
          <h2 className="text-[#ee701e] font-extrabold text-4xl text-center">Restablecer la contraseña de la cuenta</h2>
          <p className="my-6 font-bold">Ingrese una nueva contraseña para me782003f@gmail.com</p>
          <form>
              <div className="flex flex-col">
                  <div className='flex gap-2 align-middle input-group'>
                  {/* <FaRegEnvelope  className='my-auto'/> */}

                      {/* <div className='my-auto'>
                          {PasswordIcon_1}
                      </div> */}
                      <FaLock />


                  <input type="password" placeholder="Nueva contraseña" />
                  
                  </div>
                  <div className='flex gap-2 align-middle input-group'>
                  {/* <FaRegEnvelope  className='my-auto'/> */}
                  <FaLock />


                      {/* <div className='my-auto'>
                          {PasswordIcon_1}
                      </div> */}

                  <input type="password" placeholder="Confirma la nueva contraseña" />
                  
                  </div>
              </div>

             
              <div className="flex gap-6 mt-10">
                  <button className="bg-[#ee701e] text-white px-6 py-3 rounded-full h-fit send-btn" onClick={()=>navigate("/login")}>confirmar</button>
                  <button className="font-bold underline">Cancelar</button>
              </div>
          </form>
          </div>
      </div>
      </div>
    )
}