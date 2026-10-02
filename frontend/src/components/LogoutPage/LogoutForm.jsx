import "./LogoutForm.css";
import { Link } from "react-router-dom";
import DILEMMA from "../../assets/img/dilemme.jpg"
// import { useTranslation } from "react-i18next";

const LogoutForm = () => {

    //   const { t } = useTranslation();
    return (
        <>
            {/* <SmallHeader/> */}
            <div className="logout-card">
                <div className="logout-title">
                    <p>déconnexion</p>
                </div>
                <div className="logout-img">
                    <img src={DILEMMA} alt="t'es sûr?" />
                    <p>t'es sûr?</p>
                </div>
                <div className="logout-buttons">
                    <button>oui</button>
                    <Link to="/home">
                        <button>non</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LogoutForm;
