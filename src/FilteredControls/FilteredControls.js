import React, { Component } from 'react';
import Data from '../Data.js';

export default class FilteredControls extends Component {
  constructor(props) {
    super(props);
    this.state={
      mutators: [],
      iterations: [],
      accessors: []
    }
  }

  getMutatorMethods() {
      let filteredMutator = this.props.cards.filter((method) => {
        return method.title === 'Mutator methods'
      })
      this.setState({mutators: filteredMutator})
    }

    getIterationMethods() {
      let filteredIteration = this.props.cards.filter((method) => {
        return method.title === 'Iteration methods'
      })
      this.setState({iterations: filteredIteration})
    }

    getAccessorMethods() {
      let filteredAccessors = this.props.cards.filter((method) => {
        return method.title === 'Accessor methods'
      })
      this.setState({accessors: filteredAccessors})
    }
      
    //make sure to change this lifecycle below
    //after receiving fetchAPI
  componentWillMount() {
    this.getMutatorMethods();
    this.getIterationMethods();
    this.getAccessorMethods();
  }

  render() {
    return (
      <section className='left-box'>
        <article className='left-title'>
        Which prototype methods do you want to practice?
        </article>
        <article className='button-container'>
        <button className='button iteration'>Iteration Methods</button>
        <button className='button mutator'>Mutator Methods</button>
        <button className='button accessor'>Accessor Methods</button>
        </article>
        <p className='need-to-study-text'>Keep track of what you need to study!</p>
        <p className='study-list-text'>Study list: 
        {this.props.cards.correct}
        </p>
      </section>
    )
  }
}