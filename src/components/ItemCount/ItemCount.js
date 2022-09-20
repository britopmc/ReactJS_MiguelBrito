import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

function ItemCount({stock, count, setCount, handleAgregar}) {

  
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
      <Button disabled={count<1} onClick={handleSubstract}> - </Button>
      <span> {count} </span>
      <Button disabled={count===stock} onClick={handleAdd}> + </Button>
      <Button style={{width: "100%"}} disabled={count<1} onClick={handleAgregar} variant="primary">Agregar al carrito</Button>
    </div>
  );
}

export default ItemCount;