import React, { Component } from 'react';
import '../Styles/Main.scss';
import Header from '../Header/Header.js';
import FilteredControls from '../FilteredControls/FilteredControls.js';
import Card from '../Card/Card.js';

export default class App extends Component {
  constructor() {
    super();
    this.state={
      cards:[],
      mutators: [],
      iterations: [],
      accessors: [],
      deckInUse: [],
      currentCard: null,
      currentSelection: ''
    }
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/SHmethods')
    .then(response => response.json())
    .then(response => this.setState({ cards: response.SHmethods }))
    .catch(err => console.log('card error', err))
  }

    //cards component only needs to know about subset of whatever was filtered

  setCards = (event) => {
    let cards = this.state.cards.filter((method) => {
      return method.title === event.target.id;
    })
    this.setState({deckInUse: cards}, this.randomizer)
  }

randomizer = ()=>{
  let cards = this.state.deckInUse
  const cardIndex = Math.floor(Math.random() * Math.floor(cards.length - 1));
  this.setState({
    currentCard:cards[cardIndex]
})
}

checkReturnCard = () => {
  const currentCard = this.state.currentCard
  if(!currentCard) {
    return <div></div>
  } else {
    const answer = currentCard.answer
    const question = currentCard.question
    const link = currentCard.link
  return (
    <Card 
      card={currentCard}
      randomizer={this.randomizer}
    />)
    }  
  }
  
  render() {
    return (
      <section className='app'>
        <Header />
        <FilteredControls 
          mutator={this.setCards}
          iteration={this.setCards}
          accessor={this.setCards}
          //not sure if this is working below
          saveAnswers={this.props.correct}
        />
        {this.checkReturnCard()}
      </section>
    );
  }
}

