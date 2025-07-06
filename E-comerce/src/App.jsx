import {BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout";
import Home from "./assets/componet/home";
import MyProduct from "./assets/componet/myProduct";
import FormFil from "./assets/componet/from";
import PaymentMethod from "./assets/componet/submit";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="myProduct" element={<MyProduct/>}/>
        <Route path="form" element={<FormFil/>}/>
        <Route path="submit" element={<PaymentMethod/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App; 