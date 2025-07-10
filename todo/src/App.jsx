import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addtask, Del, complete,editdata } from "./todoSlice";

const App = () => {
  const [inp, setInp] = useState("");
  const data = useSelector(state => state.todo.Task);
  const dispatch = useDispatch();
  console.log(data);

  const [btninp,setBtnInp] = useState(true)
  const [idedit,setIdedit] = useState("");

  const submitbtn=()=>{
   setBtnInp(true)
   dispatch(editdata({id:idedit,work:inp}))
  }
  const handle=(id,work)=>{
    setBtnInp(false);
    setIdedit(id);
    setInp(work);
  }


  const ans = data.map((item, idx) => {
    return (
      <tr>
        <td>{idx + 1}</td>
        {
          item.status === "incomplete" ? (
            <>
              <td>{item.work}</td>
            </>
          ) : (<>
            <td><span style={{ color: "red" }}>{item.work}</span></td>
          </>
          )}
        <td><button onClick={() => dispatch(Del(item.id))}>Delete</button></td>
        <td><button onClick={() => dispatch(complete(item.id))}>Complete</button></td>
        <td><button onClick={()=> handle(item.id,item.work)}>Update</button></td>
      </tr>
    )

  })

  const sub = () => {
    dispatch(Addtask({ id: Date.now(), work: inp, status: "incomplete" })),setInp("")
  }
  return (
    <>
      <input type="text" value={inp} onChange={(e) => {setInp(e.target.value)} } />
     {
      btninp ?(<>
      <button onClick={sub}>add</button>
      </>):(<>
       <button onClick={submitbtn}>Update</button>
      </>)
     }
     

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Action</th>
            <th>Delete</th>
            <th>Complete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  )
}
export default App;