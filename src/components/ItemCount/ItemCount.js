import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({stock, addToCart}) {

  const [count, setCount] = useState(0)
  const handleAdd = () => {
    if(count < stock){
    setCount(count+1)
  }
  }
  const handleSubstract = () => {
    if(count>0){
      setCount(count-1)
    }
  }


  return (

    <div>
      <Button onClick={handleSubstract}> - </Button>
      <span> {count} </span>
      <Button onClick={handleAdd}> + </Button>
      <Button style={{width: "100%"}} disabled={count<1} onClick={()=> addToCart(count) } variant="primary">Agregar al carrito</Button>
    </div>
  );
}

export default ItemCount;