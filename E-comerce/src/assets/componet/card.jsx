
import axios from "axios";
import "../css/card.css"
import img1 from "../image/sunshineBrand.avif"
//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from "react";

import { useDispatch } from "react-redux";
import { AddToCard } from "../../cardSlice";

export function Card1() {
    const [val,setVal] = useState([])
    const dispech = useDispatch();

    const onload=async()=>{
      let api = "http://localhost:3000/clothes"
      let res = await axios.get(api)
      // console.log(res.data)
      setVal(res.data)
    }
    useEffect(()=>{
        onload()
    },[]);

    const ans = val.map((item)=>{
    return(
    <Card style={{ minWidth: '275px',width: '12rem' }}>
      <Card.Img variant="top" src={item.image} />
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
          discount:item.discount,category:item.category, brand:item.brand ,qnty:item.qnty+1
        }))}>Hurry Up</Button>
        &nbsp;&nbsp;
        {item.discount && <span className="badge bg-success ms-5" >Discount:{item.discount}</span>}
      </Card.Body>
    </Card>
        )
    })


    const [val1,setVal1] = useState([]);

    const onload1=async()=>{
      let api = "http://localhost:3000/clothes2"
      let res = await axios.get(api)
      // console.log(res.data)
      setVal1(res.data)
    }
    useEffect(()=>{
        onload1()
    },[]);

    const ans2 = val1.map((item)=>{
    return(
    <Card style={{ minWidth: '275px',width: '12rem' }}>
      <Card.Img variant="top" src={item.image} />
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
          discount:item.discount,category:item.category, brand:item.brand,qnty:item.qnty+1
        }))}>Hurry Up</Button>
        &nbsp;&nbsp;
        {item.discount && <span className="badge bg-success ms-5" >Discount:{item.discount}</span>}
      </Card.Body>
    </Card>
        )
    })
  return (
    <>
    <div className="sunshine">
      <img src={img1} alt="SunshoneBrand" />
    </div>
   <div className="card-grid">
      {ans}
    </div>

    <div className="sunshine">
      <img src={img1} alt="SunshoneBrand" />
    </div>
   <div className="card-name">
      {ans2}
    </div>
    </>
   
  );
}
