import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Cart from './components/Cart';
import MyProvider from './context/CartContext';


function App() {

  return (<>


    <BrowserRouter>
      <MyProvider>

        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={"BIENVENIDOS A COMIQUERIA BAREIRO!!!!"} />} />
          <Route path="/home" element={<ItemListContainer greetings={"BIENVENIDOS A COMIQUERIA BAREIRO!!!!"} />} />
          <Route path="/item/:idPedido" element={<ItemDetailContainer />} />
          <Route path="/category/:idCategoria" element={<ItemListContainer greetings={"Categoria: "} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </MyProvider>
    </BrowserRouter>


  </>
  );
}

export default App;
