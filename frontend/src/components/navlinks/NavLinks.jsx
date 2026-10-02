import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/app-context.js";
import LOGO from "../../assets/img/favicon.png";

const NavLinks = () => {
    const auth = useContext(AuthContext);

    return (
        <ul className="navlink-ul">
            <li className="navlink-logo"><img src={LOGO} alt="bimbimbambam" /></li>
            <li className="navlink-title"><NavLink to="/home"><h1>slo-pigeon</h1></NavLink></li>
            {!auth.isLoggedIn && (
                <>
                    <li className="navlink-button">
                        <NavLink to="/login">connexion</NavLink>
                    </li>
                </>
            )}
            {auth.isLoggedIn && (
                <>
                    <li className="navlink-button">
                        <NavLink>déconnexion</NavLink>
                    </li>
                </>
            )}
        </ul>
    )
}

export default NavLinks;