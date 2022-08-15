import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import './App.css';
import LoginProvider from './context/auth-context';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <ResponsiveAppBar />
      </LoginProvider>
    </div>
  );
}

export default App;
