import React from 'react'
import {Modal, Image} from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class VillagerModal extends React.Component{
    render(){
        if(!this.props.show)
            return null

        return (
            <div>
                <Modal open closeIcon onClose={() => {this.props.handleModal()}}>
                    <Modal.Header>{this.props.details.name}</Modal.Header>
                    <Modal.Content image>
                        <Image  src={this.props.details.image_url}/>
                        <Modal.Description>
                            <ul>
                                <li><b>Gender:</b> {this.props.details.gender}</li>
                                <li><b>Species:</b> {this.props.details.species}</li>
                                <li><b>Personality:</b> {this.props.details.personality}</li>
                                <li><b>Birthday:</b> {this.props.details.birthday}</li>
                                <li><b>Catchphrase:</b> {this.props.details.initial_phrase}</li>
                            </ul>
                        </Modal.Description>    
                    </Modal.Content>
                </Modal>
            </div>
            
        );
    }
}

export default VillagerModal