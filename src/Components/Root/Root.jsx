import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
         
            <Navbar></Navbar>
            <div className="flex-grow">
                <Outlet></Outlet> 
            </div>
            
            <Footer></Footer>
        </div>
    );
};


export default Root;