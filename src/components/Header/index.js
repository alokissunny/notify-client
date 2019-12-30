import {Navbar , Nav , NavDropdown , Form , FormControl , Button, Container} from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom'
const Header = (props) => {
  function goHome() {
      console.log('Home Clicked');
  }

    return  <Container>
    <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
    <Link to="/"><Navbar.Brand onClick={goHome}>Notify-Me</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
    </Navbar>
    </Container>
    }
    export default Header;