import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { del } from "../../cardSlice2";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Heart = () => {
  const heartItems = useSelector((state) => state.card2.Task2);
  // console.log(heartItems + "thair")
  const [showdata, setShowdata] = useState([]);
  const dispach = useDispatch()

 const onlaod = async () => {
  let arr = [];

  for (let i = 0; i < heartItems.length; i++) {
    try {
      let res = await axios.get(`http://localhost:3000/clothes/${heartItems[i]}`);
      arr.push(res.data);
    } catch (err1) {
      try {
        let res2 = await axios.get(`http://localhost:3000/clothes2/${heartItems[i]}`);
        arr.push(res2.data);
      } catch (err2) {
        console.log(`❌ ID ${heartItems[i]} not found in clothes or clothes2`);
      }
    }
  }

  setShowdata(arr);
};

  useEffect(() => {
    onlaod();
  }, []);

  const ans = showdata.map((item) => {
    // console.log(ans)
    return (
      <>
      {/* <div style={{display:"flex"}}> */}
        <Card style={{ width: '15rem', inWidth: '275px' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              <span style={{color:"gray"}}>{item.description}</span><br/>
              Price:{" "}
              <span>{item.price}</span> &nbsp; MRP:{" "}
              <span style={{ textDecoration: "line-through",color:"red"}}>{item.OldPrice}</span>
            </Card.Text>
            <Button variant="primary" onClick={()=>dispach(del(item.id))}>Remove</Button>
          </Card.Body>
        </Card>
        {/* </div> */}
      </>
    );
  })

  return (
    <>
      <h1>❤️ Favourite Items</h1>
      <div style={{display:"flex",justifyContent:"center",gap:"2rem",flexWrap:"wrap",padding: "0px 0px 2rem 0px"}}>
        {ans}
      </div>
    </>
  )
};
export default Heart;
