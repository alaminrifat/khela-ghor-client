import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Header/Navbar/Navbar";
import Footer from "../../Pages/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Main;