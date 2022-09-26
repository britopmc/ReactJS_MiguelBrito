import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import { CartProvider } from './context/CartContext.js';
import Checkout from './components/Checkout/Checkout.js';



const App = () => {


  return (
 

    <div>
      <CartProvider>

        <BrowserRouter>

          <NavBar/>

          <Routes>
      
          <Route path='/'  element={ <ItemListContainer/> } />
          <Route path='/category/:category'  element={ <ItemListContainer/> } />
          <Route path='/item/:id'  element={ <ItemDetailContainer/> } />

          <Route path='/cart'  element={ <Cart/> } />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*'  element={ <Navigate to="/"/> } />

          </Routes>


        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
