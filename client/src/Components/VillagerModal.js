import React from 'react'
import {villagerData} from '../service.js';
import {Modal, Image} from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class VillagerModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        if(!this.props.show)
            return null

        return (
            <div>
                
                <Modal open closeIcon onClose={() => {this.props.handleModal()}}>
                    <Modal.Header>{this.props.villagerName}</Modal.Header>
                    <Modal.Content image>
                        <Image  src={this.props.villagerImage}/>
                        <Modal.Description>
                            <ul>
                                <li><b>Gender:</b> {this.props.villagerGender}</li>
                                <li><b>Species:</b> {this.props.villagerSpecies}</li>
                                <li><b>Personality:</b> {this.props.villagerPersonality}</li>
                                <li><b>Birthday:</b> {this.props.villagerBirthday}</li>
                                <li><b>Catchphrase:</b> {this.props.villagerCatchPhrase}</li>
                            </ul>
                        </Modal.Description>    
                    </Modal.Content>
                </Modal>
            </div>
            
        );
    }
}

export default VillagerModal