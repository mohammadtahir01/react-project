import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { del } from "../../cardSlice2";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Heart = () => {
  const heartItems = useSelector((state) => state.card2.Task2);
  console.log(heartItems + "thair")
  const [showdata, setShowdata] = useState([]);
  const dispach = useDispatch()

  const onlaod = async () => {
    let arr = [];
    for (let i = 0; i < heartItems.length; i++) {
      let res = await axios.get(`http://localhost:3000/clothes/${heartItems[i]}`);
      arr.push(res.data);
    }
    setShowdata(arr);
  };
  useEffect(() => {
    onlaod();
  }, []);

  const ans = showdata.map((item) => {
    console.log(ans)
    return (
      <>
        <Card style={{ width: '15rem', inWidth: '275px' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.description}
              {item.price} &nbsp; MRP:{" "}
              <span style={{ textDecoration: "line-through" }}>{item.OldPrice}</span>
            </Card.Text>
            <Button variant="primary" onClick={()=>dispach(del(item.id))}>Remove</Button>
          </Card.Body>
        </Card>
      </>
    );
  })

  return (
    <>
      <h1>❤️ Favourite Items</h1>
      <div>
        {ans}
      </div>
    </>
  )
};
export default Heart;
