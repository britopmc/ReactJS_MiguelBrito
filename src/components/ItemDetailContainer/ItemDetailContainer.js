import { useEffect, useState } from 'react';
import { lecturaDatos } from '../../helpers/lecturaDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"



function ItemDetailContainer() {

const [detalle, setDetalle] = useState([])

const [loading, setLoading] = useState(true)

const {id} = useParams()


  useEffect(()=>{
    setLoading(true)
    lecturaDatos()
    .then((res)=>{
      setDetalle( res.filter((prod) => prod.id === id) )
      console.log()

    } )
    .finally( () => {

      setLoading(false)
    }


    )
  }, [id])

  

  return (
  <div className='row'>

    {
      loading ? <h2>Cargando...</h2>

      : <ItemDetail id={detalle[0].id} nombre={detalle[0].nombre} descripcion={detalle[0].descripcion} imagen={detalle[0].imagen} precio={detalle[0].precio} stock={detalle[0].stock}/>
    }


  </div>
  );
}


export default ItemDetailContainer;