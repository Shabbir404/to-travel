import { Outlet } from "react-router-dom";
import '../../Css/outlet.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OutletRoot = () => {
    return (
        <div className="outlet-root">
            <div className="overlay p-1">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OutletRoot;