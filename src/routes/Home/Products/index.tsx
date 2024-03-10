import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import './styles.css';

export default function Products() {
    return (
        <div className="bds-products-main-container">
            <Navbar />
            <div className="bds-products-container">
                <Outlet />
            </div>
        </div>
    )
}
