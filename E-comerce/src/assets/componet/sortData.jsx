import { useState } from "react";
import "../css/sortData.css"
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useState,useEffect } from "react";

import { useDispatch } from "react-redux";
import { AddToCard } from "../../cardSlice";
import { useNavigate } from "react-router-dom";

const SortData = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const [mydata,setMydata] = useState([]);
    const dispech = useDispatch();
    const navigate = useNavigate();
  const handle=async()=>{
    let api = "http://localhost:3000/clothes"
    let res = await axios.get(api);
    setMydata(res.data); 
  }


const ans = mydata.map((item)=>{

    if(item.price>=min && item.price<=max){
    return(
    <Card style={{ minWidth: '275px',width: '12rem' }}>
      <Card.Img variant="top" src={item.image} onClick={()=>navigate(`show/${item.id}`)}/>
       {item.rating && <span className="badge bg-warning">Rating: {item.rating}</span>}
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         {item.description}<br />
         {item.OldPrice && <span>Old Price:<span className="text-decoration-line-through">{item.OldPrice}</span></span>}
         &nbsp;&nbsp;{item.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>dispech(AddToCard({id:item.id,name:item.name,image:item.image
          ,rating:item.rating,description:item.description,OldPrice:item.OldPrice,price:item.price,
          discount:item.discount,category:item.category, brand:item.brand ,qnty:1
        }))}>Hurry Up</Button>
        &nbsp;&nbsp;
        {item.discount && <span className="badge bg-success ms-5" >Discount:{item.discount}</span>}
      </Card.Body>
    </Card>
        )}
    })


  return (
    <>
      <h1>helo</h1>
      <div className="Div1">
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}/>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}/>
         <button onClick={handle}>Search Data</button>
        </div>

        <div className="showdata">
            <div>
                {ans}
            </div>
        </div>
    </>
  );
};
export default SortData;
