import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//importing react-bootstraps navbar and router link.
//This creates a responsive navbar that can handle navigation to different pages.

const NavigationBar = () => {
  return (
    <Navbar bg="info" expand="lg p-3">
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/read">Read</Nav.Link>
        <Nav.Link as={Link} to="/create">Create</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;