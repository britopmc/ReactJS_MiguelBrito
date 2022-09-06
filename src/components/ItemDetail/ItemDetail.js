import Item from '../Item/Item';



function ItemDetail({productos}) {


  return (

    <div className='row'>
      {
      productos.map((producto) => (
          <Item key={producto.id} id={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} imagen={producto.imagen} precio={producto.precio} stock={producto.stock}/>
        ))
  
        
      }

    </div>


  );
}


export default ItemDetail