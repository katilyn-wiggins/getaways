import React from 'react';
import Getaways from '../../containers/Getaways';
import GetawayDetail from '../../containers/GetawayDetail'; 
import User from '../../containers/User';
import './app.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


export default function App() {
  return (
  <div>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/user">Register</Link>
      <Switch>
        <Route
          path="/"
          exact
          component={Getaways}
        />
         <Route
          path="/user"
          exact
          component={User}
          /> 
        <Route
          path="/:id"
          exact
          component={GetawayDetail}
          /> 
       
      </Switch>
    </Router>
    </div>);
}



