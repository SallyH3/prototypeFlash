import React from 'react';
import Card from '../Card/Card.js';

const Cards = () => {
  return  (
    <section className='right-box'>
      <section className='right-box-cards-container'>
      <article className='question'>
      {/* {props.question} */}
      "Copies a sequence of array elements within the array."
      </article>
      <article className='right-controls'>
          <input className='card-input' placeholder='.reduce()'></input>
          <button className='submit-answer'>Submit answer</button>
        </article>
        <footer className='footer-container'>
          <p className='type-text'>Type:
          {/* {props.type} */}
          </p>
          <p className="learn-more">
          {/* <a
            href=
            // {card.link}
            className='link'
            target='_blank'
            rel='noopener noreferrer'>
            Learn more
            </a> */}
        </p>
        </footer>
      </section>
    </section>
  )
}

export default Cards;