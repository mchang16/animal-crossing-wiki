import React from 'react'
import {Form, Button, Card, Container, Grid, Input, Label, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import '../styling/createaccount.css'
// import e from 'express';

class CreateAccount extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isFormValid: null,
            passwordInput:"",
            usernameInput:"",
            message:"",
        }
    }

    handleRegister(){

        let showUsernameError = false;
        let showPasswordError = false;

        let newMessage = "";

        if(this.state.usernameInput == ""){
            showUsernameError = true;
        }

        if(this.state.passwordInput == ""){
            showPasswordError = true;
        }

        if(showUsernameError){
            newMessage += "Username must have ...."
        }

        if(showPasswordError){
            newMessage += "Password must have ...."
        }

        if(!showUsernameError && !showPasswordError){
            this.setState({
                isFormValid: true,
                message: "Account created!"
            })
        }
        else{
            this.setState({
                isFormValid: false,
                message: newMessage
            })
        }  
    }

    handleUsernameChange(e){
        this.setState({
            usernameInput: e.target.value
        })
    }

    handlePasswordChange(e){
        this.setState({
            passwordInput: e.target.value
        })
    }

    render(){

        let message = null;

        if(this.state.isFormValid == false){
            message = 
            <Message
                error
                header='Error'
                content={this.state.message}>
            </Message>;
        }
        else if(this.state.isFormValid == true){
            message = 
            <Message
                success
                header='Success'
                content={this.state.message}>
            </Message>;
        }

        return(
            <div className="container">
            <h1>Create Account</h1>
            {message}
            <Card>
                <Card.Content>
                <Form>
                    <Form.Field>
                        <label>Create Username</label>
                        <input onChange={e => this.handleUsernameChange(e)}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Create Password</label>
                        <input onChange={e => this.handlePasswordChange(e)}></input>
                    </Form.Field>
                    <div>
                        <Button onClick={() => this.handleRegister()}>Register</Button>
                    </div>
                    
                </Form>
                </Card.Content>
            </Card>
        </div>
        )
    }
}

export default CreateAccount