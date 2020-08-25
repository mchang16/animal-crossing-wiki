import React from 'react';
import {villagerCall} from '../service.js';
import {Grid, Item, Loader, Dimmer, Container, Segment} from 'semantic-ui-react';
import VillagerCard from './VillagerCard.js'
import VillagerDropDown from './VillagerDropDown.js'
import Loading from './Loading.js'
import '../styling/grid.css'

let state = {
            villagerData: [],
            villagerCards : [],
            allVillagerCards:[],
            isLoading: true,
         };

class Villagers extends React.Component{

   constructor(props){
      super(props);
      this.allVillagerData = null;
      this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
      this.state = state;
  }

    componentDidMount(){
       if(this.state.villagerCards.length == 0){
         villagerCall()
          .then(res => this.setState({villagerData: res}))
          .then(res => this.setState({isLoading: false}))
          .catch(err => console.log(err));
      }
    }

    componentWillUnmount(){
       state = this.state
    }

    componentDidUpdate(prevProps, prevState){

      if(this.state.villagerData !== prevState.villagerData){
         var data = Object.values(this.state.villagerData[0]).map((element) => { 
             return(
                 <Grid.Column>
                      <VillagerCard id = {element.id}villagerName={element.name['name-USen']} villagerPersonality = {element.personality}
                      villagerImage = {element.image_uri} villagerGender = {element.gender}
                      villagerSpecies = {element.species}
                      villagerBirthday = {element.birthday} villagerCatchPhrase = {element['catch-phrase']}/> 
                 </Grid.Column>
             )
                 
         });
         this.setState({villagerCards: data, allVillagerCards: data});
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
      if(this.state.isLoading){
         return (
            <Loading/>
         );
      }
      return(
          <div>
              <div className="dropDownContainer">
                  <VillagerDropDown onSpeciesChange={this.handleSpeciesChange}/>
              </div>
              <div className= "gridContainer">
                      <Grid columns={4} className='grid' padded >
                          {this.state.villagerCards}
                      </Grid>                    
              </div>       
          </div>
      );
  }
}

export default Villagers
