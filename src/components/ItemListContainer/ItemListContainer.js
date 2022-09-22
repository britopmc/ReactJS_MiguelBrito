import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"



function ItemListContainer() {

  const [productos, setProductos] = useState([])

  const [loading, setLoading] = useState(true)

  const {category} = useParams()

  useEffect(()=>{
    setLoading(true)

    const productosRef = collection(db, 'productos')
    const q = category ? query(productosRef, where('category', '==', category)) : productosRef
    
     
      getDocs(q)
      .then((snapshot)=> {
  
        const productosDB=snapshot.docs.map((doc)=> ( {id: doc.id, ...doc.data()}))
  
        setProductos(productosDB)
      })
      .finally(()=> {
  
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



