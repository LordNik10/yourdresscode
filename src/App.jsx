import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import './App.scss';
import LoginProvider from './context/auth-context';
import HomePage from './pages/Home/HomePage';
import Products from './pages/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LoginProvider>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </LoginProvider>
  );
}

export default App;
