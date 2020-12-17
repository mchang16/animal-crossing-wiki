import React from 'react'
import {Container, Grid} from 'semantic-ui-react'

import Villagers from './Villagers.js';
import Clothing from './Clothing.js';


class Window extends React.Component{
   constructor(props){
      super(props);

      this.villagerData = []
      this.test = null

      this.state = {
         currentDisplay: [],
         clothingData: [],
         isLoading: false,
      }
   }

   render(){
      var window = null;

		if(this.props.current == 'villagers'){
         window = <Villagers />
      }

      if(this.props.current == 'clothing' ){
         window = <Clothing/>
      }
      
      return(
         <Container>
            {window}
         </Container>
      );
   }
}

export default Window

//d