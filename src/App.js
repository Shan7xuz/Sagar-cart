import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Switch>
          <Route path='/' component={Home} exact ></Route>
          <Route path='/About' component={About} ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
