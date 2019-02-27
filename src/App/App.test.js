import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <App />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states', () => {
  expect(wrapper.state()).toEqual({
    cards:[],
    mutators: [],
    iterations: [],
    accessors: [],
    deckInUse: [],
    currentCard: null,
    currentSelection: '',
    activeButton: ''
});
});

it('should return card when currentCard is falsey', () => {
  wrapper.state().currentCard = true
  wrapper.instance().checkReturnCard()
  expect(wrapper).toMatchSnapshot()
});

it('should create deck for quiz', () => {
  expect(wrapper.state('deckInUse')).toEqual([])
  wrapper.instance().setCards({target: {id: "Mutator methods"}})
  expect(wrapper.state('deckInUse')).toEqual([])
});

});