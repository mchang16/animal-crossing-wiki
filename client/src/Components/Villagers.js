import React from 'react';
import {Grid, Item} from 'semantic-ui-react';
import CardGrid from './Grid.js';

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
              </div>
            </div>
        );
    }
}

export default Villagers


// call fetch(/villagers)
// setState with the data just fetched
// for every data entry, create a VillageCard


//Villagers -> Grid -> VillagerCard