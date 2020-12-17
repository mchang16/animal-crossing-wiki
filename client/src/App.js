import React from 'react'
import AnimalCrossingWiki from './Components/AnimalCrossingWiki'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Components/Login.js'
import CreateAccount from './Components/CreateAccount.js'

class App extends React.Component{
   render(){
      return(
            <BrowserRouter>
					<Route path="/login" exact component={Login}></Route>
               <Route path="/" exact component={AnimalCrossingWiki}></Route>
               <Route path="/createaccount" exact component={CreateAccount}></Route>
				</BrowserRouter>
      );
   }
}

export default App;
