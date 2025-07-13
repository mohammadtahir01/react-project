import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Navtop=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Todo-List</Nav.Link>
            <Nav.Link as={Link} to="color">Color-Picker</Nav.Link>
            <Nav.Link as={Link} to="count">Counter</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Navtop;