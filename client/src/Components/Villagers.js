import React from 'react';
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
        this.callBackend()
          .then(res => this.setState({villagerData: res}))
          .catch(err => console.log(err));
    }
    
    callBackend = async () => {
        //this fetch is actuall made to localhost:3000 (the web pack dev server)
        // but then it is proxied to localhost:5000
        //IMPORTANT: having callBackend() as a async function so that we can properly
        // feth data first, before we try to manipulate it
        const response = await fetch('/villagers');
        const body = response.json();

        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      }
    
      render(){
        return(
            <div>
                <h1>Villagers</h1>
              <div>
                <CardGrid villagers = {this.state.villagerData}/>
                {/* the props in render are the properties of this Villagers component, passed
                from the previous routed route to here (which would be from App.js)*/}
                {/* <Route
                  path='/villagers'
                  render={(props) => (
                    <CardGrid villagers = {this.state.villagerData} {...props}/>
                  )}
                /> */}
              </div>
            </div>
        );
    }
}

export default Villagers
