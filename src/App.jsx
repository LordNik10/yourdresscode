import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import './App.scss';
import LoginProvider from './context/auth-context';
import HomePage from './pages/Home/HomePage';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
