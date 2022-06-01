import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {
  return (<>
  <NavBar/>
  <ItemListContainer greeting={"BIENVENIDOS A COMIQUERIA BAREIRO!!!!"}/>
  </>
  );
}

export default App;
