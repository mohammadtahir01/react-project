import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addtask } from "../todoslice";


const Home=()=>{
    const [todo,setTodo] = useState("")
    const data = useSelector(state=>state.todos.Task);
    const dispach = useDispatch()
    console.log(data)

    const ans = data.map((item,idx)=>{
        return(
            <tr>
                <td>{idx+1}</td>
                <td>{item.work}</td>
            </tr>
        )
    })

    const handle=()=>{
        dispach(Addtask({work:todo}));
        setTodo("")
    }
    return(
        <>
       <h1>Todo-List</h1>
       <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
       <button onClick={handle}>Add</button>
       <table>
        <thead>
            <tr>
                <th>#</th>
                <th>List</th>
            </tr>
        </thead>
        <tbody>{ans}</tbody>
       </table>
        </>
    )
}
export default Home;