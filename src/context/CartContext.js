import { createContext, useState } from "react";
import swal from 'sweetalert';



export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
     return cart.some((item) => item.id === id)
    }

    const CartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const CartTotal = () => {

        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {


        swal({
            title: "Esta seguro?",
            text: "Si vacia el carrito, tendra que volver a empezar",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Se vacio el carrito de forma exitosa", {
                icon: "success",
              });
              setCart([])
            }
          });
    }

    const terminarCompra = (id) => {

      swal({
        title: "Compra exitosa",
        text:`Tu numero de orden es: ${id}`,
        icon: "success",
      })
      setCart([])
    }

    const removeItem = (id) => {

        setCart( cart.filter((item) => item.id!== id))
    }

    return (

        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            CartQuantity,
            CartTotal,
            emptyCart,
            removeItem,
            terminarCompra
          }}>

            {children}

        </CartContext.Provider>

    )
}