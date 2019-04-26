import React, { Component } from 'react';

import Header1 from './Header1';

import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
