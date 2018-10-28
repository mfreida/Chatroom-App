signin.js

import { React } from 'react' 

class Signin extends React.Component {
 
    constructor(props){
       super(props)
       this.state = {}
    }
    
    render(){
        
        return(
           <div> Content here </div>    
         )
        
    }
    
}

export default Signin

signup.js

import { React } from 'react' 

class Signup extends React.Component {
 
    constructor(props){
       super(props)
       this.state = {}
    }
    
    render(){
        
        return(
           <div> Content here </div>    
         )
        
    }
    
}
export default Signup


App.js


import { React } from 'react' 
import { Route, Link, Switch } from 'react-router-dom'

import SignIn from './views/SignIn/'
import SignUp from './views/SignUp/'

class App extends React.Component {
 
    constructor(props){
       super(props)
       this.state = {}
    }
    
    render(){
        
        return(
           <div>
            
            {/** create navbar here */}
            {/**
               links should be created this way
               
               <Link to="/logout/" > LOGOUT </Link>
               
               link is the link
               to represents the url 
            */}
            
             
              {/** content will show here */}
            
            
              <Switch>
                <Route exact path="/" component={Signin} />
                <Route path="/signin/" component={Signin} />
                <Route path="/signup/" component={Signup} />
              </Switch>
 
           </div>    
         )
        
    }
    
}
export default App


index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from "react-router-dom";

import App from './App'

ReactDOM.render(
    (
        <BrowserRouter>
           <App  />
        </BrowserRouter>
     ),
    document.getElementById('root')
)



/*var Parent  = React.createClass({
    getInitialState:function(){
      return {signup:false,login:true}
    },
    switch:function(word){
      var signup,login;
      if(word == "signup"){signup = true;login = false;}
      else{login = true; signup = false;}
      return this.setState({login:login,signup:signup})
      
    },
    render:function(){
      
          var self = this;
          return (
                <div>
                        <div id="buttons">
                          <p id="signupButton" onClick={self.switch.bind(null,"signup")} className={self.state.signup ? "yellow":"blue"}>Sign In</p>
                        <p id="loginButton" onClick={self.switch.bind(null,"login")} className={self.state.login ? "yellow":"blue"}> Login</p>
                        </div>
                
                     { self.state.signup?<Signup/> : null}
                     {self.state.login? <Login /> : null}
              
               </div>
          )
    }
  })
  var Signup = React.createClass({
        render:function(){
              return (
              <div>
                     
                    <div id="signup">
                          <input type="text" id="first" placeholder="First Name"/>
                          <input type="text" id="last" placeholder="Last Name"/>
                          <input type="email" id="email" placeholder="Email"/>
                      <input type="password" id="password" placeholder="Password"/>
                      <input type="password" id="confirm" placeholder="Confirm Password"/>
                      <button id="send">Send</button>
              </div>
                  </div>
              
              )
        }
  })
  
  var Login = React.createClass({
        render:function(){
              return (
              
                    <div>
                                
                   <div id="login">
                      <input type="email" id="email" placeholder="Email"/>
                      <input type="password" id="password" placeholder="Password"/>
                      <button id="send">Send</button>
              </div>
                  
                    </div>
                
              )
        }
  })
  
  
  ReactDOM.render(<Parent/>,document.getElementById("space")) */
