import { NavLink } from "react-router-dom";
import homeImg from '../../assets/home.svg';

import './styles.css';


export default function Header() {
    return (
        <header className="bds-header">
            <nav className="bds-header-nav">
                <NavLink to="/home" className={({ isActive }) => isActive ? "bds-navlink-active" : ""}>
                    <h3>Início</h3>
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "bds-navlink-active" : ""}>
                    <h3>Produtos</h3>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "bds-navlink-active" : ""}>
                    <h3>Sobre nós</h3>
                </NavLink>
            </nav>
            <NavLink to="/home">
                <img src={homeImg} alt="home" />
            </NavLink>
        </header>
    )
}
