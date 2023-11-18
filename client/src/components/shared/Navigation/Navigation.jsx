import './Navigation.style.css'
import { Link } from 'react-router-dom'
import { SiHomebridge } from "react-icons/si";

export default function Navigation() {
  return (
    <nav className="navbar container">
      <Link className='brandStyle' to='/' >
        <SiHomebridge className='logoStyle' />
        <span>Sadhu_Hub</span>
      </Link>
    </nav>
  )
}
