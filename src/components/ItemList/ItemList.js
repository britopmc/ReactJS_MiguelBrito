
import Item from '../Item/Item';


function ItemList({productos}) {

 
  return (

    <div className='row'>
      {
      productos.map((producto) => (
          <Item key={producto.id} id={producto.id} nombre={producto.nombre} imagen={producto.imagen}/>
        ))
  
        
      }

    </div>


  );
}

export default ItemList;