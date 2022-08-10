import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import HeaderFooter from './components/Static/HeaderFooter';
import Home from './components/Static/Home';
import Products from './components/Products/ProductsPage/Products';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/Static/NotFound';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import { CartProvider } from './components/Contexts/CartContext';
import { ThemeProvider } from './components/Contexts/ThemeContext';
import { GlobalStyles } from './components/StyledComponents';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <ThemeProvider>
      <GlobalStyles />
      <CartProvider>

        <HashRouter>
          <Routes>

            <Route path="/" element={<HeaderFooter />}>

              <Route index element={<Home/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Route>

          </Routes>
        </HashRouter>
      </CartProvider>

    </ThemeProvider>

  );
}

export default App;
