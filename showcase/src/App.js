import React, { Component } from 'react';
import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Grid />
        <Footer />
      </>
    );
  }
}

export default App;
