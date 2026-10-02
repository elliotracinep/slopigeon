import Header from "../header-init/Header";
import "./MainPage.css"

const MainPage = () => {
    return (
        <>
            <Header />
            <div className="info-card">
                <div className="info-card-upper-section">
                    <h1>Ce site est en cours de développement</h1>
                </div>
                <div className="info-card-lower-section" />

            </div>
        </>
    );
}

export default MainPage;