import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';


function Item(props) {

  const {nombre, descripcion, imagen, precio, stock} = props

  const addToCart = (count) => {
    console.log("Se anadio al carrito", count, nombre)
  }

  return (
    <div className='col-4'>
    <Card  className="text-center" style={{ width: '18rem', margin: "2rem"}}>
      <Card.Img variant="top" src={imagen}/>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
          <Button variant="secondary">Ver detalle del producto</Button>
          <br/>
          <br/>
          Precio Unitario {precio} AR$
          <br/>
        </Card.Text>        
        <ItemCount stock={stock} addToCart={addToCart}/>
        <br/>
        Stock {stock}
        
      </Card.Body>
    </Card>

    </div>
  );
}

export default Item;