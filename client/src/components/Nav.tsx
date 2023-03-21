import { NavLink } from "react-router-dom";

const Nav : React.FC = () => <>
    <nav>
        <ul className='nav__ul'>
            <li className='nav__li'><NavLink className='nav__a' to="/">Home</NavLink></li>
            <li className='nav__li'><NavLink className='nav__a' to="/misdemeanours">Misdemeanours</NavLink></li>
            <li className='nav__li'><NavLink className='nav__a' to="/confession">Confess To Us</NavLink></li>
        </ul>
    </nav>
</>

export default Nav;