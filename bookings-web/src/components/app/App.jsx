import React from 'react';
import Getaways from '../../containers/Getaways';
import GetawayDetail from '../../containers/GetawayDetail'; 
import './app.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


export default function App() {
  return (
  <div>
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route
          path="/"
          exact
          component={Getaways}
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



