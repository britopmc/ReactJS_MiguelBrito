import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';



function ItemDetail(props) {

  const {addToCart, isInCart } = useContext(CartContext)


  const { item } = props


  const [count, setCount] = useState(0)

  const handleAgregar = () => {

    const itemToCart = {
      id: item.id,
      precio: item.precio,
      cantidad: count,
      subtotal: count*item.precio,
      nombre: item.nombre,
      imagen: item.imagen

    }

    addToCart(itemToCart)

  }


  return (
    <div className="col d-flex justify-content-center" padding="0">
    <Card  className="text-center" style={{ width: '18rem', margin: "2rem"}}>
      <Card.Img variant="top" src={item.imagen}/>
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          {item.descripcion}
          <br/>
          <br/>
          Precio Unitario {item.precio} AR$
          <br/>
        </Card.Text>

        <br/>
        Stock {item.stock}
        <br/>
        <br/>

        {
        
        isInCart(item.id)
        ? <Link to={"/cart"} className="btn btn-success">Terminar mi compra</Link>
        : <ItemCount stock={item.stock} count={count} setCount={setCount} handleAgregar={handleAgregar}/>
        }

        
        
      </Card.Body>
    </Card>

    </div>
  );
}




export default ItemDetail