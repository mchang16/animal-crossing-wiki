import React from 'react';
import {Grid, Button, Dropdown} from 'semantic-ui-react';
import '../styling/dropdown.css'


const species = [
    {key: 'ag', value: 'Alligator', text: 'Alligator'},
    {key: 'ae', value: 'Anteater', text: 'Anteater'},
    {key: 'be', value: 'Bear', text: 'Bear'},
    {key: 'bi', value: 'Bird', text: 'Bird'},
    {key: 'bu', value: 'Bull', text: 'Bull'},
    {key: 'ca', value: 'Cat', text: 'Cat'},
    {key: 'ch', value: 'Chicken', text: 'Chicken'},
    {key: 'co', value: 'Cow', text: 'Cow'},
    {key: 'cu', value: 'Cub', text: 'Cub'},
    {key: 'de', value: 'Deer', text: 'Deer'},
    {key: 'do', value: 'Dog', text: 'Dog'},
    {key: 'du', value: 'Duck', text: 'Duck'},
    {key: 'ea', value: 'Eagle', text: 'Eagle'},
    {key: 'el', value: 'Elephant', text: 'Elephant'},
    {key: 'fr', value: 'Frog', text: 'Frog'},
    {key: 'gt', value: 'Goat', text: 'Goat'},
    {key: 'gl', value: 'Gorilla', text: 'Gorilla'},
    {key: 'ha', value: 'Hamster', text: 'Hamster'},
    {key: 'hi', value: 'Hippo', text: 'Hippo'},
    {key: 'ho', value: 'Horse', text: 'Horse'},
    {key: 'ka', value: 'Kangaroo', text: 'Kangaroo'},
    {key: 'ko', value: 'Koala', text: 'Koala'},
    {key: 'li', value: 'Lion', text: 'Lion'},
    {key: 'mk', value: 'Monkey', text: 'Monkey'},
    {key: 'mo', value: 'Mouse', text: 'Mouse'},
    {key: 'op', value: 'Octopus', text: 'Octopus'},
    {key: 'or', value: 'Ostrich', text: 'Ostrich'},
    {key: 'pe', value: 'Penguin', text: 'Penguin'},
    {key: 'pi', value: 'Pig', text: 'Pig'},
    {key: 'ra', value: 'Rabbit', text: 'Rabbit'},
    {key: 'rh', value: 'Rhino', text: 'Rhino'},
    {key: 'sh', value: 'Sheep', text: 'Sheep'},
    {key: 'sq', value: 'Squirrel', text: 'Squirrel'},
    {key: 'ti', value: 'Tiger', text: 'Tiger'},
    {key: 'wo', value: 'Wolf', text: 'Wolf'},
];

class VillagerDropDown extends React.Component{

    render(){
        return(
            <Dropdown className="drop" placeholder="Select Species" selection options={species} 
            onChange={(event,data) => this.props.onSpeciesChange(data)}/>
        );
    }
}

export default VillagerDropDown