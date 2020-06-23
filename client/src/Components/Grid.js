import React from 'react';
import {Grid, Button, Dropdown, Modal} from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import VillagerCard from './VillagerCard.js'
import VillagerDropDown from './VillagerDropDown.js'


class CardGrid extends React.Component{
    constructor(props){
        super(props);
        this.allVillagerData = null;
        this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
        this.state = {
            villagerData: [],
        };
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.villagers !== prevProps.villagers){
            var names = Object.keys(this.props.villagers[0]);
            var data = Object.values(this.props.villagers[0]).map((element, index) => { 
                element.name = names[index];
                return(
                    <Grid.Column>
                         <VillagerCard villagerInfo={element}/> 
                    </Grid.Column>);
            });
            this.setState({villagerData: data});
            this.allVillagerData = data;
        }
    }

    handleSpeciesChange(data){
        console.log("Changed");
        var species = data.value;
        var newVillagers = [];

        this.allVillagerData.forEach(villager => {
            console.log(villager)
            if(villager.props.children.props.villagerInfo.species == species){
                newVillagers.push(villager);
            }
        })
        // console.log(newVillagers);
        this.setState({villagerData: newVillagers})
    }

    render(){
        return(
            <div>
                <div>
                    <VillagerDropDown onSpeciesChange={this.handleSpeciesChange}/>
                </div>
                <div>
                    <Grid columns={7}>
                        {this.state.villagerData}
                    </Grid>
                </div>       
            </div>
        );
    }
}

export default CardGrid;