import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

 
function Item(props) {

  const {id, nombre, imagen} = props


  return (
    <div className='col-4'>
    <Card  className="text-center" style={{ width: '18rem', margin: "2rem"}}>
      <Card.Img variant="top" src={imagen}/>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          <Link className='btn-primary btn' to={`/item/${id}`} variant="secondary">Ver detalle del producto</Link>
          <br/>
        </Card.Text>        
        
      </Card.Body>
    </Card>

    </div>
  );
}

export default Item;