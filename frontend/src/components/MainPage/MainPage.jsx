import Header from "../header/Header";
import "./MainPage.css"

const MainPage = () => {
    return (
        <>
            <Header />
            <div className="info-card">
                <div className="info-card-title">
                    <h1>Ce site est en cours de développement</h1>
                </div>
                <div className="info-img" />

            </div>
        </>
    );
}

export default MainPage;