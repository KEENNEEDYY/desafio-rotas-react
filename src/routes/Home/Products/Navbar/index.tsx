
import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Navbar() {
    return (
        <nav className="bds-navbar-container">
            <NavLink to="computers" className={({ isActive }) => isActive ? "bds-navlink-active" : ""}>
                <h3>Computadores</h3>
            </NavLink>
            <NavLink to="eletronics" className={({ isActive }) => isActive ? "bds-navlink-active" : ""}>
                <h3>Eletrônicos</h3>
            </NavLink>
            <NavLink to="books" className={({ isActive }) => isActive ? "bds-navlink-active" : ""}>
                <h3>Livros</h3>
            </NavLink>
        </nav>
    )
}
