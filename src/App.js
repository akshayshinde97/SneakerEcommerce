
import './App.css';
import Navbar from "./Components/Navbar1";
import Home from "./Pages/Home";
import ProductList from './Pages/ProductList';
import { Routes, Route, Link } from "react-router-dom";
import Product from './Pages/Product';
import Cart from './Pages/Cart';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </div>
    
  );
}

export default App;
