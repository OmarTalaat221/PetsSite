import { Outlet } from 'react-router-dom';
import styles from './Questionnare.module.css';
export default function Layout() {
  return (
    <div>
         <div className={`${styles.questionnareBg}`}>
         <h1 className="text-center text-6xl font-bold text-white w-[560px]">Find your new best friend</h1>
    </div>

    <Outlet />
    </div>
  )
}
