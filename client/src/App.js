import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import UhOh404 from './pages/UhOh404';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path ='/' component={Search} />
          <React exact path ='/search' component={Search} />
          <React exact path ='/saved' component={Saved} />
          <React component={UhOh404} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App;
