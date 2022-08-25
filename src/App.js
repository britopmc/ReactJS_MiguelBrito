
import Saludo from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';



const App = () => {


  const usuarios=["Miguel", "Buenos Aires", "Argentina"]

  return (

    <div>
      <NavBar/>
      <Saludo usuario={usuarios}/>
    </div>
  );
}

export default App;
