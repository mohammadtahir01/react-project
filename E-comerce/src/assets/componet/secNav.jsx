import logo from "../image/ajio.png";
import '../css/navtop.css';
import '../css/secNav.css';
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useState } from "react";
const SecNav = () => {
  const data = useSelector(state=>state.MyCard.Cart);
  // console.log(data);
  const newdata = data.length;
  const navigate = useNavigate();

  const [val,setVal] = useState("");

  const handlesub=()=>{
    navigate(`selected/${val}`)
    setVal("")
  }
  return (
    <>

    <div className="nav-top">
       <p onClick={()=>navigate("/singup")}>Sign in / Join Ajio</p>
     </div>
      <div className="secNav">
          <div className="secNav-logo">
            <img src={logo} alt="Logo" className="secNav-logo__image" />
          </div>
         <div className="secNav__container2">
          <div className="secNav__container">
            <Link to="home">Home</Link>
            <Link to="sortdata">SortData</Link>
            <Link to="about">About</Link>
            <Link to="myProject">MyProduct</Link>
          </div>
            <div className="secNav__container__search">
                <input type="text" placeholder="Search AJIO" className="secNav__container__search__input" name="textVal" value={val} onChange={(e)=>{setVal(e.target.value)}} />
                <button className="secNav__container__search__button" onClick={handlesub}>Search</button>
            </div>
            <div className="secNav__container__cart">
                <span href="#" className="secNav__container__cart__link">
                  <CiHeart/>
                </span>
                <span className="secNav__container__cart__link">
                  <MdOutlineShoppingBag onClick={()=>navigate("/myProject")}/>
                </span>
                <p>{newdata}</p>
                
            </div>     
        </div>
      </div>
    </>
  );
};
export default SecNav;
