import "./Header.css";
import NavLinks from "../navlinks/NavLinks";

const Header = () => {
    return (
        <header>
            <nav className="header-nav">
                <NavLinks />
            </nav>
        </header>
    );
}

export default Header;