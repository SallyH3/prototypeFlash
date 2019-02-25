import React, { Component } from 'react';
import '../Styles/Main.scss';
import Header from '../Header/Header.js';
import FilteredControls from '../FilteredControls/FilteredControls.js';
import Cards from '../Cards/Cards.js';
import Data from '../Data.js';

export default class App extends Component {
  constructor() {
    super();
    this.state={
      cards:[],
      mutators: [],
      iterations: [],
      accessors: [],
      // type: 'all',
      currentCard: null,
      currentSelection: '',
      getLink: Data.map(method => {
        return {link: method.link, id: method.id}
      })
    }
  }

    //make sure components only know what they need to know about, app only needs to know about what cards need to display
    //filtered controls doesn't need to know about cards, just the buttons values
    //when you click button, it takes target id and gives back to app so that app knows what cards to display
    //filter cards using setCards although, setCards should show all when buttons haven't been clicked.
    //when button is clicked, causes app to filter cards and sends only cards that need to be shown to the cards component
    //cards component only needs to know about subset of whatever was filtered

  // getCurrentType() {
    
  // }

  // componentDidMount() {
  //   this.setState({cards: Data})
  // }

  setCards = (event) => {
    let cards = Data.filter((method) => {
      return method.title === event.target.id;
    })
    // return cards;
    this.setState({cards}, this.randomizer)
  }

  //these 3 should be one function
// getMutatorMethods = () => {
//   this.setState({currentSelection: 'Mutator methods'},this.setCards)
// }

// getIterationMethods = () => {
//   this.setState({currentSelection: 'Iteration methods'},this.setCards)
// }

// getAccessorMethods = () => {
//   this.setState({currentSelection: 'Accessor methods'},this.setCards)
// }

randomizer = ()=>{
  let cards = this.state.cards
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
    <Cards 
      // cards={this.setCards}
      //these below will be passed from cards to card
        card={currentCard}
      // answer={answer}
      // question={question}
      // link={link}
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

