import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"
import Loader from '../Loader/Loader';
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"



function ItemDetailContainer() {

const [detalle, setDetalle] = useState([])

const [loading, setLoading] = useState(true)

const {id} = useParams()


  useEffect(()=>{
    setLoading(true)

    const docRef = doc(db, 'productos', id)

    getDoc(docRef)
    .then((resp)=>{

      setDetalle({id: resp.id, ...resp.data()})
    })
    .finally(()=>{

      setLoading(false)
    })

  }, [id])

  

  return (
  <div className='row'>

    {
      loading ? <Loader/>

      : <ItemDetail id={detalle.id} item={detalle}/>
    }


  </div>
  );
}


export default ItemDetailContainer;