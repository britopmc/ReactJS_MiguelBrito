import { useContext } from "react"
import Card from 'react-bootstrap/Card';
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'


const Cart = () => {

    const {cart, CartTotal, emptyCart, removeItem} = useContext(CartContext)


    return (
        <div className="container my-5">
            <h2>Resumen de tus productos</h2>
            <hr/>


            {
                    cart.map((item)=>(

                        <div className='col-4' key={item.id}>
                        <Card  className="text-center" style={{ width: '12rem', margin: "2rem"}}>
                            <Card.Img variant="top" src={item.imagen}/>
                                <Card.Body>
                                <Card.Title>{item.nombre}</Card.Title>
                                <Card.Text>
                                    <br/>
                                    <br/>
                                    Cantidad {item.cantidad}
                                    <br/>
                                    <br/>
                                    Subtotal {item.subtotal}
                                    <br/>
                                    <button onClick={()=> removeItem(item.id)} classname="btn btn-secondary"><BsFillTrashFill/></button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
    
                        </div>

                    )) 
                       
            }

            <h2>Total  {CartTotal()}  pesos </h2>
            <br/>

            <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito por completo</button>



        </div>
    )
}

export default Cart