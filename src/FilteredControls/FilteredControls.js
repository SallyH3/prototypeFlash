import React from 'react';

const FilteredControls = (props) => {
  return (
    <section className='left-box'>
        <article className='left-title'>
          Which prototype methods do you want to practice?
        </article>
        <p className='left-subtitle'>
          ...click on a method below and your card will display!
        </p>
        <article className='button-container'>
          <button 
            name='iterator'
            id='Iteration methods' 
            onClick={props.iteration} 
            className={`button iteration ${props.activeButton === 'iterator' ? 'active-button' : ''}`}
          >Iteration Methods
          </button>
          <button 
            name='mutator'
            id='Mutator methods' 
            onClick={props.mutator}
            className={`button mutator ${props.activeButton === 'mutator' ? 'active-button' : ''}`}
          >Mutator Methods
          </button>
          <button 
            name='accessor'
            id='Accessor methods' 
            onClick={props.accessor} 
            className={`button accessor ${props.activeButton === 'accessor' ? 'active-button' : ''}`}
          >Accessor Methods
          </button>
        </article>
        <hr></hr>
    </section>
  )
}

export default FilteredControls;