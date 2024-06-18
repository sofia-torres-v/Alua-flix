import NavLinks from "./NavLinks"
import Logo from '../../assets/Logo.png'
import './navBar.css'

const NavBar = () => {
  return (
    <nav className="nav container">
        <img src={Logo} alt="" />
        <ul className="nav__links">
          <NavLinks/>     
        </ul>
    </nav>
  )
}

export default NavBar
