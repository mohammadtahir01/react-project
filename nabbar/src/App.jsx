import { BrowserRouter,Routes, Route} from "react-router-dom"
import Layout from "../layout";
import Home from "./assets/home";
import Color from "./assets/color";
import Count from "./assets/counter";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route  path="home" element={<Home/>}/>
      <Route path="color" element={<Color/>}/>
      <Route path="count" element={<Count/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;