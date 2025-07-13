import { Outlet } from "react-router";
import Navtop from "./src/assets/nav";

const Layout=()=>{
    return(
        <>
        <Navtop/>
        <Outlet/>
        </>
    )
}
export default Layout;