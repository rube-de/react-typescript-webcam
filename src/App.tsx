import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CaptureVideo} from './components/CaptureVideo'

const App: React.FC = () => {
  return (
    <div className="App">
          <CaptureVideo />
    </div>
  );
}

export default App;
