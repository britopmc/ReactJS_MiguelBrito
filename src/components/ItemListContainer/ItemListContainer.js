import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { lecturaDatos } from '../../helpers/lecturaDatos';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';


function ItemListContainer() {

  const [productos, setProductos] = useState([])

  const [loading, setLoading] = useState(true)

  const {category} = useParams()

  useEffect(()=>{
    setLoading(true)
    lecturaDatos()
    .then((res)=>{
      if(!category){
        setProductos(res)
      }
      else{
        setProductos( res.filter((prod) => prod.category === category ) )
      }
    } )
    .finally( () => {

      setLoading(false)
    })

  },[category])

  

  return (
  <div className='row'>


    {
      loading ? <Loader/>

      : <ItemList productos={productos}/>
    }


  </div>
  );
}

export default ItemListContainer;



