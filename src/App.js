import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>
      HATS pages
    </h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component = {HomePage}/>
        <Route path='/hats' component = {HatsPage}/>      
      </switch>
    </div>
  );
}

export default App;
