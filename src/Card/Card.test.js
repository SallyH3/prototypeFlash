import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

const mockQuestion = [
  {
  title: "Mutator methods",
  type: "mutator",
  correct: false,
  question: "Copies a sequence of array elements within the array.",
  answer: ".copyWithin()",
  id: 1,
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
  },
  {
  title: "Mutator methods",
  type: "mutator",
  correct: false,
  question: "Fills all the elements of an array from a start index to an end index with a static value.",
  answer: ".fill()",
  id: 2,
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"
  },
  {
  title: "Mutator methods",
  type: "mutator",
  correct: false,
  question: "Removes the last element from an array and returns that element.",
  answer: ".pop()",
  id: 3,
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
  }
]

const mockFunc = jest.fn();
const mockCheckAnswer = jest.fn();
const mockRandomizer = jest.fn();
// const getSubmitFunction = jest.fn();

describe ('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card card={mockQuestion}
      randomizer={mockRandomizer}
      // getSubmitFunction={mockGetSubmitFunction}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default states', () => {
    expect(wrapper.state()).toEqual({
      inputBox: '',
      incorrectCards: [],
      text: ''
    })
  })

  it('should grab text from input box when checkInput is invoked', () => {
    wrapper.find('.card-input').simulate('change', {target: {value: '.pop()'}});
  })

  it('should check answers from user when submit button is clicked', () => {
    // wrapper.instance().getSubmitFunction = jest.fn()
    // wrapper.instance().getSubmitFunction()
    // const instance = wrapper.instance();
    // jest.spyOn(instance, 'getSubmitFunction');
    wrapper.find('.submit-answer').simulate('click');
    // console.log(wrapper.instance().getSubmitFunction)
    // expect(instance.getSubmitFunction).toHaveBeenCalled();
    expect(wrapper.state('text')).toEqual('Almost! Try again!');
  })
})