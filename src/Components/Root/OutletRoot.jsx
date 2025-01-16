import { Outlet } from "react-router-dom";
import '../../Css/outlet.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ImagesLayout from "../ImageLayout/ImagesLayout";

const OutletRoot = () => {
    return (
        <div className="outlet-root">
            <div className="overlay p-1">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <ImagesLayout></ImagesLayout>
            <Footer></Footer>
        </div>
    );
};

export default OutletRoot;