import React from 'react'
import {Grid, Item, Loader, Dimmer, Container, Segment} from 'semantic-ui-react';

class Loading extends React.Component{
   constructor(props){
      super(props);
   }

   componentDidMount(){
      
   }

   render(){
      return(
         <Dimmer.Dimmable as={Segment} active className="dim">
            <Dimmer inverted active>
               <Loader>Loading...</Loader>
            </Dimmer>
         </Dimmer.Dimmable>
      )
   }
}

export default Loading