import React from 'react';
import {Grid, Button, Dropdown} from 'semantic-ui-react';
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
                        <VillagerCard name= {element.name} personality= {element.personality} image= {element.image_url} 
                            species={element.species}/> 
                    </Grid.Column>);
            });
            this.setState({villagerData: data});
            this.allVillagerData = data;
        }
    }

    handleSpeciesChange(data){
        var species = data.value;
        var newVillagers = [];

        this.allVillagerData.forEach(villager => {
            if(villager.props.children.props.species == species){
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