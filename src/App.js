import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Cart from './components/Cart';
import MyProvider from './context/CartContext';
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyASRoXHQdxsO6TfVWf1_5QSgoBn1lQs-Ww",
    authDomain: "comiqueria-bareiro.firebaseapp.com",
    projectId: "comiqueria-bareiro",
    storageBucket: "comiqueria-bareiro.appspot.com",
    messagingSenderId: "37129714692",
    appId: "1:37129714692:web:9c5ba2d85508383bc50951"
  };
  
  initializeApp(firebaseConfig);

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
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </MyProvider>
    </BrowserRouter>


  </>
  );
}

export default App;
