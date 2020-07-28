import React from 'react';
import {villagerCall} from '../service.js';
import {Grid, Item} from 'semantic-ui-react';
import CardGrid from './Grid.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Villagers extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          villagerData: []
        };
    }

    componentDidMount(){
        villagerCall()
          .then(res => this.setState({villagerData: res}))
          .catch(err => console.log(err));
    }

    render(){
      return(
          <div>
              <h1>Villagers</h1>
            <div>
              <CardGrid villagers = {this.state.villagerData}/>
            </div>
          </div>
      );
    }
}

export default Villagers
