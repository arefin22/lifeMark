import { Outlet } from "react-router-dom";
import NavBar from "../../components/shared/navbar/Navbar";
import Footer from "../../components/shared/footer/Footer";



const Main = () => {
    return (
        <div>
            <div className="-mt-[52px]">

                <NavBar />
            </div>
            <div className="min-h-screen pt-28 bg-white shadow dark:bg-gray-800" >
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;