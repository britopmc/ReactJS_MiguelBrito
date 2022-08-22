
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="warning" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src="/img/130219.svg"
              width="120"
              height="120"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Servicios</Nav.Link>
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link">Turnos</Nav.Link>
            <NavDropdown title="Contactanos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Facebook</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Formulario de contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;