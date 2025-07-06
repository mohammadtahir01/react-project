import {BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout";
import Home from "./assets/componet/home";
import MyProduct from "./assets/componet/myProduct";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="myProduct" element={<MyProduct/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App; 