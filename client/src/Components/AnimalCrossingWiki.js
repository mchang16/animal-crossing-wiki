import React from 'react'
import {Button, Divider, Menu, Grid, Container} from 'semantic-ui-react'
import HeaderComponent from './HeaderComponent.js'
import NavMenu from './NavMenu.js'
import Window from './Window.js'
import Login from './Login.js'
import {Link, BrowserRouter, Route} from 'react-router-dom'


class AnimalCrossingWiki extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
		  currentComponent: ""
		};
	}
	
	handleCompChange(data){
		this.setState({
			currentComponent: data.value
		})
   }
	
	render(){
		return(
			<div>
				<Container>
					<Grid padded> 
						<Grid.Row>
							<Grid.Column width="8">
								<h1>Animal Crossing Wiki</h1>
							</Grid.Column>
							
							<Grid.Column width="8" textAlign="right">
								<Link to="/login">
									<button>Login</button>
								</Link>
								
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<NavMenu onCompChange = {this.handleCompChange.bind(this)}/>
						</Grid.Row>
						<Grid.Row>
                     <Window current = {this.state.currentComponent}/>
						</Grid.Row>
					</Grid>
				</Container>
			</div>
		);
	}
}

function TestHome(){
	return(
	<div>
		Hi, welcome to the unofficial guide to Animal Crossing!
	</div>
	);
}

export default AnimalCrossingWiki