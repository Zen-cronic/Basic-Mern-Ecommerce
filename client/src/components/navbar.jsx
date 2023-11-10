import { React } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import { ShoppingCartSimple } from "phosphor-react";
export const NavBar = () => {

    return(
        <>
    <div className="navbar">
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="cart"    >
                <ShoppingCartSimple size={40}/>
            </Link>
            
            <Link to="/contact">contact</Link>
        </div>
    </div>

</>
    )

}