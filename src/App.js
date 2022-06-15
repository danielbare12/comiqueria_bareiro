import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {

  return (<>


    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings={"BIENVENIDOS A COMIQUERIA BAREIRO!!!!"} />} />
        <Route path="/home" element={<ItemListContainer greetings={"BIENVENIDOS A COMIQUERIA BAREIRO!!!!"} />} />
        <Route path="/item/" element={<ItemListContainer greetings={"NUESTROS PRODUCTOS"} />} />
        <Route path="/item/:idPedido" element={<ItemDetailContainer />} />
        <Route path="/category/:idCategoria" element={<ItemListContainer greetings={"Categoria: "} />} />
      </Routes>
      <ItemDetailContainer idPedido={4} />
      <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;
