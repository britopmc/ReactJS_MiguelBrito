
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {


  const categorias = [
    {
      id: "1",
      nombre: "Servicios",
      link: "#servicios"
    },
    {
      id: "2",
      nombre: "Productos",
      link: "#productos"
    },
    {
      id: "3",
      nombre: "Turnos",
      link: "#turnos"
    },
    {
      id: "4",
      nombre: "Contactanos",
      link: "#contactanos"
    }
  ];


  //este array de objetos lo voy a usar luego cuando deje el dropdown como corresponde en "contactanos"

  const contactos = [
    {
      id: "1",
      nombre: "Twitter",
      link: "#twitter"
    },
    {
      id: "2",
      nombre: "Instagram",
      link: "#instagram"
    },
    {
      id: "3",
      nombre: "Facebook",
      link: "#facebook"
    },
    {
      id: "4",
      nombre: "Formulario de contacto",
      link: "#form"
    }
  ]

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
            {
              categorias.map((categoria)=>(
                <Nav.Link href={categoria.link} key={categoria.id}>{categoria.nombre}</Nav.Link>
              ))
            }
            <Nav.Link href="#link"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;