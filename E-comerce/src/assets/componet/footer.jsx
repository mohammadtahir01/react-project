import '../css/footer.css'
import { HiShoppingBag } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";

const Footer=()=>{
    return(
        <>
        <div className="mainDiv">
            <div>
                <HiShoppingBag />
                <h6>EASY EXCHANGE</h6>
            </div>
            <div>
                <FaHandHoldingHeart />
                <h6>100% HANDPICKED</h6>
            </div>
            <div>
                <SiAdguard />
                <h6>ASSURED QUALITY</h6>
            </div>
        </div>

        <div className='footer'>
            <div>
                <a href="#"><h6>Ajio</h6></a>
                <ul>
                   <a href="#"><li>Who We Are</li></a>
                    <a href="#"><li>Join Our Team</li></a>
                    <a href="#"><li>Terms & Conditions</li></a>
                    <a href="#"><li>We Respect Your Privacy</li></a>
                    <a href="#"><li>Fees & Payments</li></a>
                    <a href="#"><li>Returns & Refunds Policy</li></a>
                    <a href="#"><li>Promotions Terms & Conditions</li></a>
                    <a href="#"><li>Blog</li></a>
                </ul>
            </div>
            <div>
                  <a href="#"><h6>Help</h6></a>
                <ul>
                    <a href="#"><li>Who We Are</li></a>
                    <a href="#"><li>Join Our Team</li></a>
                    <a href="#"><li>Terms & Conditions</li></a>
                    <a href="#"><li>We Respect Your Privacy</li></a>
                    <a href="#"><li>Fees & Payments</li></a>
                    <a href="#"><li>Returns & Refunds Policy</li></a>
                    <a href="#"><li>Promotions Terms & Conditions</li></a>
                    <a href="#"><li>Blog</li></a>
                </ul>
            </div>
            <div>
                  <a href="#"><h6>Shop By</h6></a>
                <ul>
                    <a href="#"><li>Who We Are</li></a>
                    <a href="#"><li>Join Our Team</li></a>
                    <a href="#"><li>Terms & Conditions</li></a>
                    <a href="#"><li>We Respect Your Privacy</li></a>
                    <a href="#"><li>Fees & Payments</li></a>
                    <a href="#"><li>Returns & Refunds Policy</li></a>
                    <a href="#"><li>Promotions Terms & Conditions</li></a>
                    <a href="#"><li>Blog</li></a>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Footer;