import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

function ItemCard(props) {


  const {nombre, descripcion, stock} = props

  const addToCart = (count) => {
    console.log("Se anadio al carrito", count, nombre)
  }

  return (
    <Card  className="text-center" style={{ width: '18rem', margin: "2rem"}}>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <ItemCount stock={stock} addToCart={addToCart}/>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;