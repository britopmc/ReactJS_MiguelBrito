import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {


  const categorias = [
    {
      id: "1",
      nombre: "Maquillaje"
    },
    {
      id: "2",
      nombre: "Perfume y fragancias"
    },
    {
      id: "3",
      nombre: "Cuidado de la piel"
    }
  ]


  const subCat1 = [
    {
      id: "1",
      nombre: "Labios"
    },
    {
      id: "2",
      nombre: "Ojos"
    },
    {
      id: "3",
      nombre: "Rostro"
    },
    {
      id: "4",
      nombre: "Uñas"
    }
  ]

  const subCat2 = [
    {
      id: "1",
      nombre: "Hombres"
    },
    {
      id: "2",
      nombre: "Mujeres"
    }
  ]

  const subCat3 = [
    {
      id: "1",
      nombre: "Cremas_Corporales"
    },
    {
      id: "2",
      nombre: "Cremas_Faciales"
    }
  ]

  return (
    <>
      <Navbar bg="warning" variant="light" expand="lg" max-width="100%">
      <Container>
        <Link to='/'>
        <img
              alt=""
              src="/img/130219.svg"
              width="120"
              height="120"
              className="d-inline-block align-top"
            />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <NavDropdown title={categorias[0].nombre} id="basic-nav-dropdown">

            {
              subCat1.map((subcat)=>(
                <NavDropdown.Item as={Link} to={`/category/${subcat.nombre}`} key={subcat.id}>{subcat.nombre}</NavDropdown.Item>
              ))
            }
            </NavDropdown>
            

            <NavDropdown title={categorias[1].nombre} id="basic-nav-dropdown">

            {
              subCat2.map((subcat)=>(
                <NavDropdown.Item as={Link} to={`/category/${subcat.nombre}`} key={subcat.id}>{subcat.nombre}</NavDropdown.Item>
              ))
            }
            </NavDropdown>

            <NavDropdown title={categorias[2].nombre} id="basic-nav-dropdown">

            {
              subCat3.map((subcat)=>(
                <NavDropdown.Item as={Link} to={`/category/${subcat.nombre}`} key={subcat.id}>{subcat.nombre}</NavDropdown.Item>
              ))
            }
            </NavDropdown>




            <Nav.Link as={Link} to={"/cart"}><CartWidget/>Terminar mi compra</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;