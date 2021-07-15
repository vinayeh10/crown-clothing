import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import SHOP from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/shop" component={SHOP}></Route>    
    </Switch>
    </div>
  );
}


export default App;
