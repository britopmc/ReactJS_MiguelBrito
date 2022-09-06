import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';



const App = () => {

  return (

    <div>

      <BrowserRouter>

        <NavBar/>

        <Routes>
          
          <Route path='/'  element={ <ItemListContainer/> } />
          <Route path='/detail/:id'  element={ <ItemDetailContainer/> } />          
          <Route path='*'  element={ <Navigate to="/"/> } />

        </Routes>

        

      </BrowserRouter>

    </div>
  );
}

export default App;
