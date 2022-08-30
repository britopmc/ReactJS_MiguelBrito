
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';



const App = () => {


  const usuarios={
    nombre:"Miguel",
    provincia:"Buenos Aires",
    pais: "Argentina"}

  return (

    <div>
      <NavBar/>
      <ItemListContainer usuario={usuarios}/>
    </div>
  );
}

export default App;
