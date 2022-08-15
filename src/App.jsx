import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import './App.css';
import LoginProvider from './context/auth-context';
import Counter from './pages/Counter/Counter';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <ResponsiveAppBar />
        <Counter />
      </LoginProvider>
    </div>
  );
}

export default App;
