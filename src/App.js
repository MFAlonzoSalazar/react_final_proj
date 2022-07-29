import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderFooter from './components/Static/HeaderFooter';
import Home from './components/Static/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import NotFound from './components/Static/NotFound';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HeaderFooter />}>

          <Route index element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />


        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
