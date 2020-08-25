import React from 'react'
import Loading from './Loading.js'
import {clothingCall} from '../service.js';

let state = {
   isLoading : true,
}

class Clothing extends React.Component{
   constructor(props){
      super(props);
      this.state = state;
   }

   componentDidMount(){
      clothingCall().then((response) => console.log(response))
   }



   render(){
      if(this.state.isLoading){
         return(
            <Loading/>
         )
      }
      return(
         <div>This is clothing</div>
      );
   }
}

export default Clothing