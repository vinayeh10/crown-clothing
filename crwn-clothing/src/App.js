import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>Hats Page</div>
  )
}

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Homepage}></Route>
    <Route exact path="/shop/hats" component={HatsPage}></Route>    
    </div>
  );
}


export default App;
