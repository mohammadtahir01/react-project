import { useParams } from "react-router-dom";

const SelectData=()=>{
    const {val} = useParams();
    return(
        <>
        <h1>helo:{val}</h1>
        </>
    )
}
export default SelectData;