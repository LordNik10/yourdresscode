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

function App() {
  return (
    <LastPage>
      <LoginProvider>
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:product" element={<Product />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </LoginProvider>
    </LastPage>
  );
}

export default App;
