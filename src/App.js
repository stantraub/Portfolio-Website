import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Nav from './components/nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
