import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Products from './Components/Product';
import Cart from './pages/Cart';
import Navigation from './Components/Navigation';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact></Route>
          {/* <Route path='/About' component={About}></Route> */}
          <Route path='/products' component={Products}></Route>
          <Route path='/cart' component={Cart}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
