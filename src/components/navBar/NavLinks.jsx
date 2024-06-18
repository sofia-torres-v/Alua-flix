import { NavLink } from "react-router-dom";

const NavLinks = () => {
    
    return (
        <>
            <li><NavLink className='link' to='/'>Home</NavLink></li>
            <li><NavLink className='link' to='/NewVideo'>Nuevo Video</NavLink></li>
        </>
    );
};

export default NavLinks;
