import logo from "../image/ajio.png";
import '../css/secNav.css';
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
// import { Navigation } from "swiper/modules";
const SecNav = () => {
  const data = useSelector(state=>state.MyCard.Cart);
  // console.log(data);
  const newdata = data.length;
  const navigate = useNavigate();
  return (
    <>
      <div className="secNav">
          <div className="secNav-logo">
            <img src={logo} alt="Logo" className="secNav-logo__image" />
          </div>
         <div className="secNav__container2">
          <div className="secNav__container">
            <span className="secNav__container__item__link" as={Link}  to="home">
              Home
            </span>
            <span className="secNav__container__item__link" as={Link} to="product">
              Products
            </span>
            <span className="secNav__container__item__link" as={Link} to="about">
              About Us
            </span>

          </div>
            <div className="secNav__container__search">
                <input type="text" placeholder="Search AJIO" className="secNav__container__search__input" />
                <button className="secNav__container__search__button">Search</button>
            </div>
            <div className="secNav__container__cart">
                <span href="#" className="secNav__container__cart__link">
                  <CiHeart/>
                </span>
                <span className="secNav__container__cart__link">
                  <MdOutlineShoppingBag onClick={()=>navigate("/myProduct")}/>
                </span>
                <p>{newdata}</p>
                
            </div>     
        </div>
      </div>
    </>
  );
};
export default SecNav;
