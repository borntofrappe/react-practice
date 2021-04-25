import React from 'react';
import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';

class App extends React.Component {
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
