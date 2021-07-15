import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';
import SHOP from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Homepage}></Route>
    <Route exact path="/shop" component={SHOP}></Route>    
    </div>
  );
}


export default App;
