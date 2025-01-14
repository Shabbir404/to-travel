import { Outlet } from "react-router-dom";
import '../../Css/outlet.css'
import Header from "../Header/Header";

const OutletRoot = () => {
    return (
        <div className="outlet-root">
            <div className="overlay p-1">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default OutletRoot;