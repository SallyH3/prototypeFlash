import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Data from '../Data.js';

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBox: '',
      value: this.props.question
    }
  }

  // componentDidMount() {
  //   // console.log(this.props)
  //   const value = this.props.question
  //   this.setState({value})
  // }

  checkAnswer = () => {
    if(this.state.inputBox === this.props.answer) {
      console.log(this.state.inputBox, this.props.answer, 'right')
    } else {
      console.log(this.state.inputBox, this.props.answer,'wrong')
    }
  }

  getSubmitFunction = () => {
    this.props.getRandomNumber()
    // this.checkAnswer();
    // const value = this.props.cards[this.props.randomNum].question
    // this.setState({value})
  }

  checkInput = (event) => {
    this.setState({inputBox: event.target.value})
  }

  render() {
    // if (this.props.cards.length === 0) {
    //   return <div></div>
    // } else {

      return (
        <section className='right-box'>
          <section className='right-box-cards-container'>
            <article className='question'>
              {this.props.question}
            </article>
            <article className='right-controls'>
              <input onChange={this.checkInput} value={this.state.inputBox} className='card-input' type='text' placeholder='ex: .reduce()'></input>
              <button onClick={this.getSubmitFunction}
              className='submit-answer'>Submit answer</button>
            </article>
            <footer className='footer-container'>
              <p className="learn-more">
                <a
                  href={this.props.link}
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
// }