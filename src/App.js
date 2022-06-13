import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  return (<>
    <NavBar />
    <ItemListContainer greetings={"BIENVENIDOS A COMIQUERIA BAREIRO!!!!"} />
    <ItemDetailContainer idPedido={4}/>
  </>
  );
}

export default App;
