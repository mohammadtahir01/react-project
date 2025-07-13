import { useState } from "react";

const Color=()=>{
    const [color,setColor] = useState("");
    const [bacolor,setBgcolor] = useState("red")

    const sub=()=>{
       setBgcolor(color);
    }
    return(
        <>
        <h1>color-Picker</h1>
        <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} />
        <button onClick={sub}>Add</button>
        <div style={{height:"300px",width:"300px",backgroundColor:bacolor}}>

        </div>
        </>
    )
}
export default Color;