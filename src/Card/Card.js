import React, { Component } from 'react';
import Data from '../Data.js';

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBox: '',
      incorrectCards: [],
      text: ''
    }
  }

    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('correct', 'JSON.stringify(correct)')
    }

  // componentDidMount() {
  //   // console.log(this.props)
  //   const question = this.props.question
  //   this.setState({question})
  // }

  checkAnswer = () => {
    if(this.state.inputBox === this.props.card.answer) {
      this.setState({
        text: 'Great job! You got it right!'
      })
      console.log(this.state.inputBox, this.props.card.answer, 'right')
    } else {
      this.setState({
        text: 'Almost! Try again!'
      })
      console.log(this.state.inputBox, this.props.card.answer,'wrong')
      let incorrectArr = [...this.state.incorrectCards, this.props.card]
      this.setState({incorrectCards: incorrectArr}, () => {
        localStorage.setItem('incorrectAnswers', JSON.stringify(incorrectArr))
      }
        )
    }
  }

  getSubmitFunction = () => {
    this.props.randomizer()
    this.setState({inputBox: ''})
    this.checkAnswer();
    // const question = this.props.cards[this.props.randomNum].question
    // this.setState({question})
  }

  checkInput = (event) => {
    this.setState({inputBox: event.target.value})
  }

   //card component should live in here and cards should map over each card and return card component each time and that is what will give multiple cards on the DOM

  render() {
    // if (this.props.cards.length === 0) {
    //   return <div></div>
    // } else {
      return (
        <section className='right-box'>
          <section className='right-box-cards-container'>
            <article className='question'>
              {this.props.card.question}
            </article>
            <article className='right-controls'>
              <input onChange={this.checkInput} value={this.state.inputBox} className='card-input' type='text' placeholder='ex: .reduce()'></input>
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
            </footer>
          </section>
        </section>
      )

    }
  }
// }