import React from 'react'
import {Button, Divider, Menu, Grid, Container} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import HeaderComponent from './HeaderComponent.js';
import NavMenu from './NavMenu.js'
import Window from './Window'


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
							<HeaderComponent/>
						</Grid.Row>
						<Grid.Row>
							<NavMenu onCompChange = {this.handleCompChange.bind(this)}/>
						</Grid.Row>
						<Grid.Row>
                     <Window current = {this.state.currentComponent}/>
						</Grid.Row>
						{/* <Route exact = {true} path='/' component={TestHome}></Route>
						<Route exact = {true} path='/villagers' component={Villagers}></Route> */}
						{/* <Route exact = {true} path='/items'></Route> */}
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