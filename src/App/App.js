import React, { Component } from 'react';
import '../Styles/Main.scss';
import Header from '../Header/Header.js';
import FilteredControls from '../FilteredControls/FilteredControls.js';
import Cards from '../Cards/Cards.js';

class App extends Component {
  render() {
    return (
      <section className='app'>
        <Header />
        <FilteredControls />
        <Cards />
      </section>
    );
  }
}

export default App;
