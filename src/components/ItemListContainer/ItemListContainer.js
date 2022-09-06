import { useEffect, useState } from 'react';
import { lecturaDatos } from '../../helpers/lecturaDatos';
import ItemList from '../ItemList/ItemList';


function ItemListContainer() {

  const [productos, setProductos] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    lecturaDatos()
    .then((res)=>{
      setProductos(res)

    } )
    .finally( () => {

      setLoading(false)
    })

  },[])

  

  return (
  <div className='row'>


    {
      loading ? <h2>Cargando...</h2>

      : <ItemList productos={productos}/>
    }


  </div>
  );
}

export default ItemListContainer;



