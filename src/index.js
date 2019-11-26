import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Messages from './Components/Messages'



ReactDOM.render( 
  (
    <Router>
      <div>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/messages' component={Messages}/>
      </div>
    </Router>
  ),
  
  document.getElementById('root')
);
