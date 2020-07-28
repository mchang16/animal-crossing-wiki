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
            var data = Object.values(this.props.villagers[0]).map((element) => { 
                return(
                    <Grid.Column>
                         <VillagerCard id = {element.id}villagerName={element.name['name-USen']} villagerPersonality = {element.personality}
                         villagerImage = {element.image_uri} villagerGender = {element.gender}
                         villagerSpecies = {element.species}
                         villagerBirthday = {element.birthday} villagerCatchPhrase = {element['catch-phrase']}/> 
                    </Grid.Column>
                )
                    
            });
            this.setState({villagerData: data});
            this.allVillagerData = data;
        }
    }

    handleSpeciesChange(data){
        var species = data.value;
        var newVillagers = [];

        this.allVillagerData.forEach(villager => {
            if(villager.props.children.props.villagerSpecies == species){
                newVillagers.push(villager);
            }
        })
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