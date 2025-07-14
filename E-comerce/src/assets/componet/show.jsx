import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/show.css"
//react icons
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddToCard2 } from "../../cardSlice2";
import { AddToCard } from "../../cardSlice";


const Show = () => {
    const { id } = useParams();
    const [showdata, setShowdata] = useState({});

    const dispach = useDispatch()

    const onlaod = async () => {
        let api = `http://localhost:3000/clothes/${id}`
        let res = await axios.get(api);
        console.log(res.data);
        setShowdata(res.data);
    }

    const onlaod1 = async () => {
        let api = `http://localhost:3000/clothes2/${id}`
        let res2 = await axios.get(api);
        console.log(res2.data);
        setShowdata(res2.data);
    }

    useEffect(() => {
        onlaod();
        onlaod1()
    }, []);

    const handle=()=>{
        dispach(AddToCard2(id))
    }
    return (
        <>
            <div className="showDiv">
                <div className="showDiv2">
                    <div>
                        <img src={showdata.image} alt="image" />
                    </div>
                    <div className="name">
                        <div>
                            <h4>{showdata.name}</h4>
                        </div>
                        <div className="discriptionDiv">
                            <p className="discription">{showdata.description}</p>
                        </div>
                        <div>
                            <p className="rating">Rating: {showdata.rating}</p>
                        </div>
                        <div>
                            <h5>Price: {showdata.price} &nbsp;&nbsp; MRP:<span style={{ color: "gray", textDecoration: "line-through" }}> {showdata.OldPrice}</span></h5>
                        </div>
                        <div className="btn12">
                            <button onClick={()=>dispach(AddToCard({...showdata, qnty: 1}))}>Add</button>
                            <button className="btn14" onClick={handle}><FaRegHeart /> Heart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Show;