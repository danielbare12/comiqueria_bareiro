import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {

  const onAdd = (cant) => {
    alert(`La cantidad de productos agregados es ${cant}`)

  }

  return (<>
  <NavBar/>
  <ItemListContainer greetings={"BIENVENIDOS A COMIQUERIA BAREIRO!!!!"}/>
  <ItemCount inicial={1} stock={5} onAdd = {onAdd}/>
  </>
  );
}

export default App;
