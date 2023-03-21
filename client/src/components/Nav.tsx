import { NavLink, redirect } from "react-router-dom";

const Nav : React.FC = () => {
    const activeStyleObject = { color: '#BB00BB' };
    const nonactiveStyleObject = { color: '#000000' }

    return(<>
        <nav>
            <ul className='nav__ul'>
                <li className='nav__li'><NavLink className='nav__a' to="/" style={({ isActive }) =>
                isActive ? activeStyleObject : nonactiveStyleObject}>Home</NavLink></li>
                <li className='nav__li'><NavLink className='nav__a' to="/misdemeanours"  style={({ isActive }) =>
                isActive ? activeStyleObject : nonactiveStyleObject}>Misdemeanours</NavLink></li>
                <li className='nav__li'><NavLink className='nav__a' to="/confession"  style={({ isActive }) =>
                isActive ? activeStyleObject : nonactiveStyleObject}>Confess To Us</NavLink></li>
            </ul>
        </nav>
    </>);
}

export default Nav;