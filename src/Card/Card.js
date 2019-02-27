import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBox: '',
      incorrectCards: [],
      text: '',
      incorrectAnswerCounter: 0
    }
  }

  checkAnswer = () => {
    if(this.state.inputBox === this.props.card.answer) {
      this.setState({
        text: 'Great job! You got it right!'
      })
    } else {
      this.setState({
        text: 'Almost! Try again!'
      })
      let counter = this.state.incorrectAnswerCounter + 1;
      this.setState({incorrectAnswerCounter: counter})
      this.setStorage();
    }
  }

  componentDidMount() {
    this.getStorage();
  }

  setStorage() {
    let incorrectArr = [...this.state.incorrectCards, this.props.card]
    this.setState({incorrectCards: incorrectArr}, () => {
      localStorage.setItem('incorrectAnswers', JSON.stringify(incorrectArr))
    }
      )
  }

  getStorage() {
    if (localStorage.getItem('incorrectAnswers') !== null) {
      let getItem = JSON.parse(localStorage.getItem('incorrectAnswers'))
      this.setState({incorrectAnswerCounter: getItem.length, incorrectCards: getItem});
    }
  }

  getSubmitFunction = () => {
    this.props.randomizer();
    this.setState({inputBox: ''})
    this.checkAnswer();
  }

  checkInput = (event) => {
    this.setState({inputBox: event.target.value})
  }

  render() {
    return (
      <section className='right-box'>
        <section className='right-box-cards-container'>
          <article className='question'>
            {this.props.card.question}
          </article>
          <article className='right-controls'>
            <input 
              onChange={this.checkInput} 
              className='card-input' 
              value={this.state.inputBox}
              type='text' 
              placeholder='ex: .reduce()'>
            </input>
            <button onClick={this.getSubmitFunction}
            className='submit-answer'>Submit answer</button>
            <p className = 'answer-text'>{this.state.text}</p>
          </article>
          <footer className='footer-container'>
            <p className="learn-more">
              <a
                href={this.props.card.link}
                className='link'
                target='_blank'
                rel='noopener noreferrer'
              >
                Learn more
              </a>
            </p>
            <p className='number-wrong-text'>Number wrong {this.state.incorrectAnswerCounter}
            </p>
          </footer>
        </section>
      </section>
    )

  }
}