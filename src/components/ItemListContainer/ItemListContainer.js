import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from '../ItemCard/ItemCard';

function ItemListContainer() {


  const productos = [
    {
      id: "1",
      nombre: "Crema",
      descripcion: "excelente producto",
      stock: 3
    },
    {
      id: "2",
      nombre: "Cera",
      descripcion: "la mejor del pais",
      stock: 10
    },
    {
      id: "3",
      nombre: "Pintura",
      descripcion: "muy duradera",
      stock: 15
    }
  ];



  return (
  <div className='row'>
    {
      productos.map((producto) => (
        <div className='col-4'>
          <ItemCard key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} stock={producto.stock}/>
        </div>
      ))
    }

    
  </div>
  );
}

export default ItemListContainer;