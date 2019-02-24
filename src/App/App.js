import React, { Component } from 'react';
import '../Styles/Main.scss';
import Header from '../Header/Header.js';
import FilteredControls from '../FilteredControls/FilteredControls.js';
import Cards from '../Cards/Cards.js';
import Data from '../Data.js';

export default class App extends Component {
  constructor() {
    super();
    this.state={
      mutators: [],
      iterations: [],
      accessors: [],
      currentSelection: '',
      getLink: Data.map(method => {
        return {link: method.link, id: method.id}
      })
    }
  }

getMutatorMethods = () => {
  this.setState({currentSelection: 'Mutator methods'})
}

getIterationMethods = () => {
  this.setState({currentSelection: 'Iteration methods'})
}

getAccessorMethods = () => {
  this.setState({currentSelection: 'Accessor methods'})
}
  
//make sure to change this lifecycle below
//after receiving fetchAPI
// componentWillMount() {
// this.getMutatorMethods();
// this.getIterationMethods();
// this.getAccessorMethods();
// }

  render() {
    
    let cards = Data.filter((method) => {
      return method.title === this.state.currentSelection;
    })
    let randomNum = Math.floor(Math.random() * Math.floor(cards.length - 1));
    return (
      <section className='app'>
        <Header />
        <FilteredControls 
          mutator={this.getMutatorMethods}
          iteration={this.getIterationMethods}
          accessor={this.getAccessorMethods}
        />
        <Cards 
          currentCard={cards[randomNum]}
          cards={cards}
          links={this.state.getLink}
          randomNum={randomNum}
        />
      </section>
    );
  }
}

