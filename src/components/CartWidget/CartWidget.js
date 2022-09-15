import { useContext } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext';


function CartWidget(){

  const { CartQuantity } = useContext(CartContext)


return(

  <div>

    <BsFillCartCheckFill/>
    <span>{CartQuantity()}</span>
    </div>

)

}

export default CartWidget;