import logo from "../image/ajio.png";
import '../css/secNav.css';
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

import { useSelector } from "react-redux";
const SecNav = () => {
  const data = useSelector(state=>state.MyCard.Cart);
  console.log(data);
  const newdata = data.length;
  return (
    <>
      <div className="secNav">
          <div className="secNav-logo">
            <img src={logo} alt="Logo" className="secNav-logo__image" />
          </div>
         <div className="secNav__container2">
          <div className="secNav__container">
            <a href="#" className="secNav__container__item__link">
              Home
            </a>
            <a href="#" className="secNav__container__item__link">
              Products
            </a>
            <a href="#" className="secNav__container__item__link">
              About Us
            </a>
          </div>
            <div className="secNav__container__search">
                <input type="text" placeholder="Search AJIO" className="secNav__container__search__input" />
                <button className="secNav__container__search__button">Search</button>
            </div>
            <div className="secNav__container__cart">
                <a href="#" className="secNav__container__cart__link">
                  <CiHeart  className="secNav__container__cart__icon" />
                </a>
                <a href="#" className="secNav__container__cart__link">
                    <MdOutlineShoppingBag className="secNav__container__cart__icon" />
                </a>
                <span>{newdata}</span>
                
            </div>     
        </div>
      </div>
    </>
  );
};
export default SecNav;
