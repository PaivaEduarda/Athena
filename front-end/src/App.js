import React from 'react';
import Rotas from './Rotas';

import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Rotas/>
      </div>
    </BrowserRouter>
  );
}