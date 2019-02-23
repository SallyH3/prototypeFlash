import React, { Component } from 'react';
import Data from '../Data.js';

const FilteredControls = (props) => {
  return (
<section className='left-box'>
        <article className='left-title'>
        Which prototype methods do you want to practice?
        </article>
        <p className='left-subtitle'>...click on a method below and your card will display on the right!</p>
        <article className='button-container'>
        <button onClick={props.iteration} className='button iteration'>Iteration Methods</button>
        <button onClick={props.mutator}className='button mutator'>Mutator Methods</button>
        <button onClick={props.accessor} className='button accessor'>Accessor Methods</button>
        </article>
        <p className='need-to-study-text'>Keep track of what you need to study!</p>
        
        {/* <p className='study-list-text'>Study list: 
        {this.props.cards.correct}
        //move this into app after cards
        </p> */}
      </section>
  )
}

export default FilteredControls;