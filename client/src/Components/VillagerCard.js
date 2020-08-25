import React from 'react'
import {villagerCall} from '../service.js';
import { Card, Icon, Image } from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import VillagerModal from './VillagerModal.js'

class VillagerCard extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            villagerData: [],
            showModal: false,
        }
        this.handleModalToggle = this.handleModalToggle.bind(this);
    }

    handleModalToggle(){
        this.setState((state) => ({
            showModal: !state.showModal
        }));
    }
    
    render(){
         return(
             <div>
                 <Card raised onClick={() => this.handleModalToggle()}>
                    <Image src={this.props.villagerImage}/>
                 <Card.Content>
                     <Card.Header>{this.props.villagerName}</Card.Header>
                     <Card.Meta>{this.props.villagerPersonality}</Card.Meta>
                 </Card.Content>
                 </Card>
                 <VillagerModal {...this.props} show={this.state.showModal} handleModal={this.handleModalToggle}/>
             </div>   
         );
    }
}

export default VillagerCard