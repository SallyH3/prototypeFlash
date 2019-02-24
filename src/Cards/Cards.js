import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Data from '../Data.js';

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBox: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  checkAnswer = () => {
    if(this.state.inputBox === this.props.cards[this.props.randomNum].answer) {
      console.log(this.state.inputBox, this.props.cards[this.props.randomNum].answer, 'right')
    } else {
      console.log(this.state.inputBox, this.props.cards[this.props.randomNum].answer,'wrong')
    }
  }

  checkInput = (event) => {
    this.setState({inputBox: event.target.value})
  }

  render() {
    const cardInfo = this.props.cards[this.props.randomNum]
    if (this.props.cards.length === 0) {
      return <div></div>
    } else {
      return (
        <section className='right-box'>
          <section className='right-box-cards-container'>
            <article className='question'>
              {this.props.cards[this.props.randomNum].question}
            </article>
            <article className='right-controls'>
              <input onChange={this.checkInput} value={this.state.inputBox} className='card-input' type='text' placeholder='.reduce()'></input>
              <button onClick={this.checkAnswer} className='submit-answer'>Submit answer</button>
            </article>
            <footer className='footer-container'>
              <p className="learn-more">
                <a
                  href={cardInfo.link}
                  className='link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Learn more
                </a>
              </p>
            </footer>
          </section>
        </section>
      )
    }
  }
}