import styles from './Navigation.style.css'
import { Link } from 'react-router-dom'
import { SiGooglehome } from "react-icons/si";


export default function Navigation() {
  const brandStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
  }
  const logoStyle = {
    color: '#FFFF00',
  }


  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to='/' >
        <SiGooglehome style={logoStyle} />
        <span>SadhuHub</span>
      </Link>
    </nav>
  )
}
