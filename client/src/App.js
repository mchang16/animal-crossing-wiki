import React from 'react';
import logo from './logo.svg';
import './App.css';

// look into proxy and fetch API
// JSON

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }
  
  componentDidMount(){
    this.callBackend()
      .then(res => this.setState({data:res.express}))
      .catch(err => console.log(err));
  }

  callBackend = async () => {
    const response = await fetch('http://localhost:5000/Michelle');
    const body = response.json();
    console.log(response);

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }

  render(){
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>{this.state.data}</h1>    
    </div>
    
    );

  }
}

export default App;
