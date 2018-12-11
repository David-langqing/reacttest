import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom'
import {Home} from 'pages/home'
import {DetailContainer} from "pages/detail"
import {LoginContainer} from "pages/login"

import {ClassifyContainer} from "pages/classify"
class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route path="/home" component={Home}></Route>
        <Route path="/detail" component={DetailContainer}></Route>
        <Route path="/classify" component={ClassifyContainer}></Route>
        <Route path="/login" component={LoginContainer}></Route>
      </Switch>
      </Router>
    );
  } 
}

export default App;
