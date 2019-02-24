import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const Data = [
  { 
  "title": "Mutator methods",
  "type": "mutator",
  "correct": false,
  "question": "Copies a sequence of array elements within the array.",
  "answer": ".copyWithin()",
  "id": 1,
  "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
  },
  { 
    "title": "Mutator methods",
    "type": "mutator",
    "correct": false,
    "question": "Fills all the elements of an array from a start index to an end index with a static value.",
    "answer": ".fill()",
    "id": 2,
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"
    }
]

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
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
    currentCard: null,
    currentSelection: '',
    getLink: Data.map(method => {
      return {link: method.link, id: method.id}
  });
});
});