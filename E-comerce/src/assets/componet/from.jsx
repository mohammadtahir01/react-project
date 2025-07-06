import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const FormFil = () => {
    const nev = useNavigate();
  return (
    <>
      <Form style={{width:"300px", margin:"auto"}}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Enter Number</Form.Label>
          <Form.Control type="number" placeholder="Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPin">
          <Form.Label>Enter Pin Code</Form.Label>
          <Form.Control type="text" placeholder="Pin Code" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

      
        <Button variant="primary" type="submit" onClick={()=>nev("/submit")}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default FormFil;
