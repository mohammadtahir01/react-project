import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Show=()=>{
    const {id} = useParams();
    const [showdata,setShowdata] = useState({});

    const onlaod=async()=>{
        let api = `http://localhost:3000/clothes/${id}`
        let res = await axios.get(api);
        console.log(res.data);
        setShowdata(res.data);
    }
    useEffect(()=>{
        onlaod();
    },[])

    return(
        <>
        <h1>helo</h1>
        <div>
            <div>
                <img src={showdata.image} alt="image" />
            </div>
            <div>
                <h3>{showdata.price}</h3>
            </div>
        </div>
        </>
    )
}
export default Show;