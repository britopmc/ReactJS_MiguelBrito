import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../firebase/config";
import { Navigate } from "react-router-dom";


const Checkout = () => {

    const { cart, CartTotal, terminarCompra  } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {

        e.preventDefault()

        const orden = {

            comprador: values,
            items: cart,
            total: CartTotal(),
        }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc)=>{
                terminarCompra(doc.id)
            })

    }

    if (cart.length === 0){
        return <Navigate to="/"/>

    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    name='nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    type={'text'}
                    className="my-3 form-control"
                    placeholder='Tu nombre'
                />
                <input
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    type={'email'}
                    className="my-3 form-control"
                    placeholder="Email"
                />
                <input
                    name='direccion'
                    value={values.direccion}
                    onChange={handleInputChange}
                    type={'text'}
                    className="my-3 form-control"
                    placeholder="Direccion"
                />
                <button type='submit' className='my-3 btn btn-success'>Enviar</button>
            </form>

        </div>
    )
}

export default Checkout