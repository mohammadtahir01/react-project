import {BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout";
import Home from "./assets/componet/home";
import MyProduct from "./assets/componet/myProduct";
import FormFil from "./assets/componet/from";
import PaymentMethod from "./assets/componet/submit";
import SelectData from "./assets/componet/selectedData";
import Show from "./assets/componet/show";
import SortData from "./assets/componet/sortData";
import Sign from "./assets/componet/signup";
import Login from "./assets/componet/loginp";
import Heart from "./assets/componet/heart";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="sortdata" element={<SortData/>}/>
        <Route path="myProject" element={<MyProduct/>}/>
        <Route path="form" element={<FormFil/>}/>
        <Route path="submit" element={<PaymentMethod/>}/>
        <Route path="selected/:textVal" element={<SelectData/>}/>
        <Route path="show/:id" element={<Show/>}/>
        <Route path="singup" element={<Sign/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="heart" element={<Heart/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App; 