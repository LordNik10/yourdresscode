import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import './App.scss';
import LoginProvider from './context/auth';
import HomePage from './pages/Home/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import LastPage from './context/lastPage';
import CartContextProvider from './context/CartContext';
import SnackBarProvider from './context/Snackbar';
import Toaster from './components/Toaster/Toaster';
import Contacts from './pages/Contacts/Contacts';
import Register from './pages/Register/Register';

function App() {
  return (
    <SnackBarProvider>
      <LastPage>
        <LoginProvider>
          <CartContextProvider>
            <Router>
              <ResponsiveAppBar />
              <Toaster
                time={3000}
                position={{ vertical: 'bottom', horizontal: 'right' }}
              />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:product" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/register" element={<Register />} />
              </Routes>

              <Footer />
            </Router>
          </CartContextProvider>
        </LoginProvider>
      </LastPage>
    </SnackBarProvider>
  );
}

export default App;
