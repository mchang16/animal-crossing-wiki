import React from 'react'
import {Menu, Input, Container, Dropdown, Search} from 'semantic-ui-react'
import '../styling/navbar.css'

const dropDownOptions = [
		{key:'villagers', value: 'villagers', text: 'Villagers'},
		{key:'furniture', value: 'furniture', text: 'Furniture'},
		{key:'clothing', value: 'clothing', text: 'Clothing'},
		{key:'recipes', value: 'recipes', text: 'Recipes'},
		{key:'music', value: 'music', text: 'Music'}
]

class NavMenu extends React.Component{
	constructor(props){
			super(props);
	}
	render(){
		return(
			<Container>
			 	<Menu >
			 		<Menu.Item>
			 			<Dropdown selection onChange={(event,data) => this.props.onCompChange(data)} 
			 					options={dropDownOptions} 
			 					placeholder="Select Category"/>
			 		</Menu.Item >
               <Container>
                  <Menu.Item className="search">
                        <Search/>
                  </Menu.Item>
               </Container>
			 	</Menu>
          </Container>	
		)
	}
}

export default NavMenu