
import { Outlet } from "react-router-dom";
import Home from "./assets/componet/home";
import Footer from "./assets/componet/footer";

const Layout=()=>{
    return(
        <>
        <Home/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;