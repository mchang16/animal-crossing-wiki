import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class VillagerCard extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Card>
                <Image src={this.props.image}/>
                <Card.Content>
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Meta>{this.props.personality}</Card.Meta>
                </Card.Content>
            </Card>
        );
    }
}

export default VillagerCard