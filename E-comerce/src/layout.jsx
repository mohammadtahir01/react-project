
import { Outlet } from "react-router-dom";
import Footer from "./assets/componet/footer";
// import NavTop from "./assets/componet/nav";
import SecNav from "./assets/componet/secNav";

const Layout=()=>{
    return(
        <>
        {/* <NavTop/> */}
        <SecNav/>      
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;