import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Show = () => {
    const { id } = useParams();
    const [showdata, setShowdata] = useState({});

    const onlaod = async () => {
        let api = `http://localhost:3000/clothes/${id}`
        let res = await axios.get(api);
        console.log(res.data);
        setShowdata(res.data);
    }
    useEffect(() => {
        onlaod();
    }, [])

    return (
        <>
            <h1>helo</h1>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{backgroundColor:"black",padding:"10px",display:"flex"}}>
                <div>
                    <img src={showdata.image} alt="image" style={{height:"300px"}}/>
                </div>
                <div>
                <div>
                    <h4>{showdata.name}</h4>
                </div>
                <div>
                    <p>{showdata.description}</p>
                </div>
                <div>
                    <p>{showdata.rating}</p>
                </div>
                <div>
                    <h3>{showdata.price} &nbsp;&nbsp; MRP:<span style={{color:"gray",textDecoration:"line-through"}}> {showdata.OldPrice}</span></h3>
                </div>
                <div>
                    <button>Add</button>
                    <button>Heart</button>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Show;