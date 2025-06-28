import {BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout";
const App=()=>{
  return(
    <>
    {/* <h1>helo</h1> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App; 