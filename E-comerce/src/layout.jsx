
import { Outlet } from "react-router-dom";
import Home from "./assets/componet/home";

const Layout=()=>{
    return(
        <>
        <Home/>
        <Outlet/>
        </>
    )
}
export default Layout;