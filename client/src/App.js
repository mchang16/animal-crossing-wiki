import React from 'react';
import {Button, Divider, Menu} from 'semantic-ui-react'
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
import VillagerModal from './Components/VillagerModal.js';


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }

  handleMenuChange(){
    console.log("Clicked Yo")
  }
    
  render(){
    return(
    <div>
      <h1>Animal Crossing Wiki</h1>
        <Menu icon='labeled'>
          <Menu.Item  onClick={() => {this.handleMenuChange()}}>
            <Link to='/'> Home</Link>
          </Menu.Item>          

          <Menu.Item>
            <Link to='/villagers'>Villagers</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to='/items'>Items</Link>
          </Menu.Item>
        </Menu>
        <Route exact = {true} path='/' component={testHome}></Route>
        <Route exact = {true} path='/villagers' component={Villagers}></Route>
        <Route exact = {true} path='/items'></Route>
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
