import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { Remove } from "../../cardSlice";



const MyProduct=()=>{
    const CartData = useSelector(state=>state.MyCard.Cart);
    const dispach = useDispatch();

    const ans = CartData.map((item)=>{
        return(
           <tr>
            <td>
                <img src={item.image} width="70" height="70"/>
            </td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}&nbsp;&nbsp;<span style={{color:"red",textDecoration:"line-through"}}>{item.OldPrice}</span></td>
            <td>{item.qnty}</td>
            <td>{item.discount}</td>
            <td>{item.brand}</td>
            <td><button onClick={()=>dispach(Remove({id:item.id}))}>Item Remove</button></td>
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
          <th>Price/OldPrice</th>
          <th>Quantity</th>
          <th>Discount</th>
          <th>Brand</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default MyProduct;