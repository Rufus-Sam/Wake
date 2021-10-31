import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GroupPage from './GroupPage/GroupPage';
import LandingPage from './LandingPage/LandingPage';
import ModePage from './ModePage/ModePage';
import PrivatePage from './PrivatePage/PrivatePage';

const App = () => {

  return (
    <Router>
      <Route path='/' exact component={LandingPage}></Route>
      <Route path='/group' component={GroupPage}></Route>
      <Route path='/mode' component={ModePage}></Route>
      <Route path='/private' component={PrivatePage}></Route>
    </Router>

  );
}

export default App;
