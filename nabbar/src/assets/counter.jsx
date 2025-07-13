import { useState } from "react";

const Count=()=>{
    const [incount,setIncount] = useState(0);

    const click=()=>{
        setIncount(incount+1)
    }
    const click2=()=>{
        if(incount >= 1){
            setIncount(incount-1)
        }else{
            alert("it cant be -1")
        }
    }
    return(
        <>
        <h1>counter</h1>
        <button onClick={click}>Increase</button>
        <p>count:{incount}</p>
        <button onClick={click2}>Decrease</button>
        </>
    )
}
export default Count;