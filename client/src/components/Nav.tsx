import { NavLink } from "react-router-dom";

const Nav : React.FC = () => <>
    <nav>
        <ul className='nav--ul'>
            <li className='nav--li'><NavLink className='nav--a' to="/">Home</NavLink></li>
            <li className='nav--li'><NavLink className='nav--a' to="/misdemeanours">Misdemeanours</NavLink></li>
            <li className='nav--li'><NavLink className='nav--a' to="/confession">Confess To Us</NavLink></li>
        </ul>
    </nav>
</>

export default Nav;