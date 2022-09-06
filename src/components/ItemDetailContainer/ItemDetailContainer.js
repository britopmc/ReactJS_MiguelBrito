import { useEffect, useState } from 'react';
import { lecturaDatos } from '../../helpers/lecturaDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"



function ItemDetailContainer() {

const [productos, setProductos] = useState([])

const [loading, setLoading] = useState(true)

const {id} = useParams()


  useEffect(()=>{
    setLoading(true)
    lecturaDatos()
    .then((res)=>{
      setProductos( res.filter((prod) => prod.id === id) )

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

      : <ItemDetail productos={productos}/>
    }

      

  </div>
  );
}


export default ItemDetailContainer;