import { useEffect, useState } from 'react';
import { lecturaDatos } from '../../helpers/lecturaDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"
import Loader from '../Loader/Loader';



function ItemDetailContainer() {

const [detalle, setDetalle] = useState([])

const [loading, setLoading] = useState(true)

const {id} = useParams()


  useEffect(()=>{
    setLoading(true)
    lecturaDatos()
    .then((res)=>{
      
      setDetalle( ...res.filter((prod) => prod.id === id) )

    } )
    .finally( () => {

      setLoading(false)
    }


    )
  }, [id])

  

  return (
  <div className='row'>

    {
      loading ? <Loader/>

      : <ItemDetail id={detalle.id} nombre={detalle.nombre} descripcion={detalle.descripcion} imagen={detalle.imagen} precio={detalle.precio} stock={detalle.stock}/>
    }


  </div>
  );
}


export default ItemDetailContainer;