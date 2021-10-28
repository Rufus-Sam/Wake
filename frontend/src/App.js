import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GroupScreen from './screens/GroupScreen';
import HomeScreen from './screens/HomeScreen';
import ModeSelectScreen from './screens/ModeSelectScreen';
import PrivateScreen from './screens/PrivateScreen';

const App = () => {
  return (
    <Router >
      <main className='background'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/mode' component={ModeSelectScreen} />
        <Route path='/private' component={PrivateScreen} />
        <Route path='/group' component={GroupScreen} />
      </main>
    </Router>

  );
}

export default App;
