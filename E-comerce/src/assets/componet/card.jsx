
import axios from "axios";
import "../css/card.css"
import img1 from "../image/sunshineBrand.avif"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState,useEffect } from "react";

export function Card1() {
    const [val,setVal] = useState([])

    const onload=async()=>{
       let api = "http://localhost:3000/clothes"
       let res = await axios.get(api)
       console.log(res.data)
        setVal(res.data)
    }
    useEffect(()=>{
        onload()
    },[])

    const ans = val.map((item)=>{
    return(
    <Card style={{ minWidth: '300px',width: '15rem' }}>
      <Card.Img variant="top" src={item.image} />
       {item.rating && <span className="badge bg-warning">Rating: {item.rating}</span>}
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         {item.description}<br />
         {item.OldPrice && <span>Old Price:<span className="text-decoration-line-through">{item.OldPrice}</span></span>}
         &nbsp;&nbsp;{item.price}
        </Card.Text>
        <Button variant="primary">Hurry Up</Button>
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
    </>
   
  );
}
