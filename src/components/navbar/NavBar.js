
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {


  var categorias = ['Servicios','Productos','Turnos','Contactanos'];
  var contactos = ['Twitter','Instagram','Facebook','Formulario de contacto']

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
            <Nav.Link href="#home">{categorias[0]}</Nav.Link>
            <Nav.Link href="#home">{categorias[1]}</Nav.Link>
            <Nav.Link href="#link">{categorias[2]}</Nav.Link>
            <NavDropdown title={categorias[3]} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{contactos[0]}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              {contactos[1]}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{contactos[2]}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              {contactos[3]}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;