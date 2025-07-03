import {BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout";
import Home from "./assets/componet/home";
const App=()=>{
  return(
    <>
    {/* <h1>helo</h1> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App; 