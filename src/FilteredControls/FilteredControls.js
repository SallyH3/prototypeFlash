import React from 'react';

const FilteredControls = (props) => {
  return (
<section className='left-box'>
        <article className='left-title'>
        Which prototype methods do you want to practice?
        </article>
        <p className='left-subtitle'>...click on a method below and your card will display on the right!</p>
        <article className='button-container'>
        <button id='Iteration methods' onClick={props.iteration} className='button iteration'>Iteration Methods</button>
        <button id='Mutator methods' onClick={props.mutator}className='button mutator'>Mutator Methods</button>
        <button id='Accessor methods' onClick={props.accessor} className='button accessor'>Accessor Methods</button>
        </article>
        <hr></hr>
      </section>
  )
}

export default FilteredControls;