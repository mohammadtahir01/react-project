import { useDispatch, useSelector } from "react-redux";
import "../css/myProduct.css"
import Table from 'react-bootstrap/Table';
import { Remove,increase,decrease} from "../../cardSlice";
//react icons
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
//using useNavigate for other pages
import { useNavigate } from "react-router-dom";



const MyProduct=()=>{
    const CartData = useSelector(state=>state.MyCard.Cart);
    const dispach = useDispatch();

    const nevigate = useNavigate()
    
    let netAmount=0;
    const ans = CartData.map((item)=>{
      netAmount+=item.price*item.qnty;
        return(
           <tr>
            <td>
                <img src={item.image} className="img"/>
            </td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.discount}</td>
            <td>{item.brand}</td>
             <td>
              <FaPlus onClick={()=>dispach(increase({id:item.id}))}/>
              {item.qnty}
             <TiMinus onClick={()=>dispach(decrease({id:item.id}))}/>
              </td>
            <td>{item.price}&nbsp;&nbsp;<span className="price">{item.OldPrice}</span></td>
            <td>{item.price*item.qnty}</td>
            <td><button onClick={()=>dispach(Remove({id:item.id}))} className="remove">Item Remove</button></td>
           </tr>
        )
    })
    return(
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Discount</th>
          <th>Brand</th>
          <th>Quantity</th>
          <th>Price/OldPrice</th>
          <th>Total Amount</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>Net Amount :</th>
          <th>{netAmount}</th>
        </tr>
      </tbody>
      </Table>
      <div className="btn1">
      <button onClick={()=>nevigate("/form")}>Payment Box</button>
      </div>
        </>
    )
}
export default MyProduct;