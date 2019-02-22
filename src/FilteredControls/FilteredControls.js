import React, { Component } from 'react';

export default class FilteredControls extends Component {
  constructor() {
    super();
    this.state={
    }
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
        {/* {props.correct} */}
        </p>
      </section>
    )
  }
}