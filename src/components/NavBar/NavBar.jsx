import styles from './navbar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/Logo'
export default function NavBar(){
    return (
        <nav className={styles.navbar}>
             <Logo />
             <input />
              <BsCart4 size={40} />     
        </nav>
     
    )

}
