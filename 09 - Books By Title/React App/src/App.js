import React from 'react';
import Header from './Header';
import Search from './Search';
import { Container } from './css/components';

/* app structure
header, SVG logo
search, search component
*/
function App() {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
}

export default App;
