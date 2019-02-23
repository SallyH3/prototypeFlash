import React, { Component } from 'react';
import '../Styles/Main.scss';
import Header from '../Header/Header.js';
import FilteredControls from '../FilteredControls/FilteredControls.js';
import Cards from '../Cards/Cards.js';
import Data from '../Data.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      mutators: [],
      iterations: [],
      accessors: [],
      currentSelection: ''
    }
  }

getMutatorMethods = () => {
  // let filteredMutator = Data.filter((method) => {
  //   return method.title === 'Mutator methods'
  // })
  // console.log(filteredMutator)
  // this.setState({mutators: filteredMutator})
  this.setState({currentSelection: 'Mutator methods'})
}

getIterationMethods = () => {
  // let filteredIteration = Data.filter((method) => {
  //   return method.title === 'Iteration methods'
  // })
  // this.setState({iterations: filteredIteration})
  this.setState({currentSelection: 'Iteration methods'})
}

getAccessorMethods = () => {
  // let filteredAccessors = Data.filter((method) => {
  //   return method.title === 'Accessor methods'
  // })
  // this.setState({accessors: filteredAccessors})
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
    let current = Data.filter((method) => {
      return method.title === this.state.currentSelection;
    })
    return (
      <section className='app'>
        <Header />
        <FilteredControls 
        mutator={this.getMutatorMethods}
        iteration={this.getIterationMethods}
        accessor={this.getAccessorMethods}
        />
        <Cards cards={current}
        />
      </section>
    );
  }
}

