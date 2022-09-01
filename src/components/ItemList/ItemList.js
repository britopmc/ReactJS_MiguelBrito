import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../Item/Item';


function ItemList({productos}) {


  return (

    <div className='row'>
      {
      productos.map((producto) => (
          <Item key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} imagen={producto.imagen} precio={producto.precio} stock={producto.stock}/>
        ))
  
      } 

    </div>


  );
}

export default ItemList;