import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app__wrapper">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
