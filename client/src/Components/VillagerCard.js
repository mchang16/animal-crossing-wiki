import React from 'react'
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
                <Image src={this.props.villagerInfo.image_url}/>
                <Card.Content>
                    <Card.Header>{this.props.villagerInfo.name}</Card.Header>
                    <Card.Meta>{this.props.villagerInfo.personality}</Card.Meta>
                </Card.Content>
                </Card>
                <VillagerModal details={this.props.villagerInfo} show={this.state.showModal} handleModal={this.handleModalToggle}/>
            </div>   
        );
    }
}

export default VillagerCard