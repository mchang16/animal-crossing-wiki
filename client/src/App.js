import React from 'react';
import {Button, Divider} from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CardGrid from './Components/Grid.js';
import Villagers from './Components/Villagers.js';


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }
    
  render(){
    return(
    <div>
      <h1>Animal Crossing Wiki</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'> Home</Link>
            </li>
            <li>
              <Link to='/villagers'> Villagers</Link>
            </li>
          </ul>
        </nav>
        <Route exact = {true} path='/' component={testHome}></Route>
        <Route exact = {true} path='/villagers' component={Villagers}></Route>
    </div>
    
    );
  }
}

function testHome(){
  return(
    <div>
      Hi, welcome to the unofficial guide to Animal Crossing!
    </div>
  );
}

export default App;
