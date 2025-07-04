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
        </>
    )
}
export default Footer;