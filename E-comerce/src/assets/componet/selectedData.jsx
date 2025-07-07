import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
//css
import "../css/select.css"
//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SelectData=()=>{
    const dispech = useDispatch()
    const {textVal} = useParams();
    const [myData,setMyData] = useState([]);

    const onlaod=async()=>{
        let api = `http://localhost:3000/clothes/?name=${textVal}`
        let res = await axios.get(api);
        console.log(res.data);
        setMyData(res.data);
    }

    useEffect(()=>{
        onlaod();
    },[])

    const ans = myData.map((item)=>{
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
          discount:item.discount,category:item.category, brand:item.brand ,qnty:1
        }))}>Hurry Up</Button>
        &nbsp;&nbsp;
        {item.discount && <span className="badge bg-success ms-5" >Discount:{item.discount}</span>}
      </Card.Body>
    </Card>
        )
    })
    return(
        <>
        <div className="mainDiv1">
           {ans}
        </div>
        </>
    )
}
export default SelectData;