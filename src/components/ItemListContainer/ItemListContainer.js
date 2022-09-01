import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const datosParaLectura = [
  {
    id: "1",
    nombre: "Extreme Gel Nail 11",
    descripcion: "",
    imagen: "/img/2068355.png",
    precio: 100,
    stock: 3
  },
  {
    id: "2",
    nombre: "Concentrado Vichy Minéral",
    descripcion: "",
    imagen: "/img/2068359.png",
    precio: 75,
    stock: 10
  },
  {
    id: "3",
    nombre: "Exfoliante Home Spa",
    descripcion: "",
    imagen: "/img/2068358.png",
    precio: 50,
    stock: 15
  }
];

const lecturaDatos = () => {

  return new Promise((resolve,reject) => {

    setTimeout(()=> {
      resolve(datosParaLectura)
    },2000)
  })
}


function ItemListContainer() {

  const [productos, setProductos] = useState([])

  useEffect(()=>{
    lecturaDatos()
    .then((res)=>{
      setProductos(res)


    } )
  },[])

  

  return (
  <div className='row'>

      <ItemList productos={productos}/>

  </div>
  );
}

export default ItemListContainer;



