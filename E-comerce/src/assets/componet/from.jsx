import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../css/form.css"

const FormFil = () => {
    const nev = useNavigate();
    const [val,setVal] = useState({  name: "",
        email: "",
        number: "",
        address: "",
        pin: ""});


    const handleVal=(e)=>{
      // let name = e.target.name;
      // let values = e.target.value;

      setVal({...val,[e.target.name]:e.target.value});
    }

    const SubmitVal=(e)=>{
      e.preventDefault();

      if(!val.name || !val.email || !val.number || !val.address || !val.pin){
        alert("Please fill all fields !")
      }else{
         nev("/submit")
      }
    }
  return (
    <>
      <Form className="sub" onSubmit={SubmitVal}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" value={val.name} onChange={handleVal}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" value={val.email} onChange={handleVal}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Enter Number</Form.Label>
          <Form.Control type="number" placeholder="Number" name="number" value={val.number} onChange={handleVal}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control type="text" placeholder="Address" name="address" value={val.address} onChange={handleVal} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPin">
          <Form.Label>Enter Pin Code</Form.Label>
          <Form.Control type="text" placeholder="Pin Code" name="pin" value={val.pin} onChange={handleVal}/>
        </Form.Group>
{/* 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group> */}

      <div className="btn1">
        <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </>
  );
};
export default FormFil;
