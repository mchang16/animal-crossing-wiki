import React from 'react'
import {Header, Grid} from 'semantic-ui-react'

class HeaderComponent extends React.Component{
    render(){
        return(
            <div>
               <Grid.Column width="8">
								<h1>Animal Crossing Wiki</h1>
							</Grid.Column>
							
							<Grid.Column width="8" textAlign="right">
								<h1>Login</h1>
							</Grid.Column>
            </div>
            
        )
    }
}

export default HeaderComponent