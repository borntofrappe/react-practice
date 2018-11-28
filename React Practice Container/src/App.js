import React, { Component } from 'react';
// import router and components
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

// render the home component in the root path, and the about component in the about route
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </>
      </Router>
    );
  }
}

export default App;
