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
      currentCard:null,
      currentSelection: '',
      getLink: Data.map(method => {
        return {link: method.link, id: method.id}
      })
    }
  }

  setCards = (event)=>{
    let cards = Data.filter((method) => {
      return method.title === event.target.id;
    })
    this.setState({cards}, this.getRandomNumber)
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
//rename randomizer
getRandomNumber = ()=>{
  let cards = this.state.cards
const cardIndex =   Math.floor(Math.random() * Math.floor(cards.length - 1));
this.setState({
  currentCard:cards[cardIndex]
})
}

checkReturnCard=()=>{
  const currentCard = this.state.currentCard
  console.log(currentCard)
  if(!currentCard){
    return <div></div>
  }else{
    const answer = currentCard.answer
    const question = currentCard.question
    const link = currentCard.link
  return (<Cards 
    answer={answer}
    question={question}
    link={link}
    getRandomNumber={this.getRandomNumber}
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
        />
        {this.checkReturnCard()}
      </section>
    );
  }
}

