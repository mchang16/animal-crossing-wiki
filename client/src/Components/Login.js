import React from 'react'
import {Form, Button, Card, Container, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import '../styling/login.css'

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <h1>Login</h1>
                <Card>
                    <Card.Content>
                    <Form>
                        <Form.Field>
                            <label>Username</label>
                            <input></input>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input></input>
                        </Form.Field>
                        <div>
                            <Button>Login</Button>
                            <Link to="/createaccount">
                                <a>Create Account</a>
                            </Link>
                        </div>
                        
                    </Form>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default Login