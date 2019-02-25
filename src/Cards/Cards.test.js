import React from 'react';
import Cards from './Cards';
import { shallow } from 'enzyme';

const mockQuestion = [];

describe ('Cards', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Cards 
      question={mockQuestion}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it ('should have default states', () => {
    expect(wrapper.state()).toEqual({
      inputBox: '',
      question: [],
      correct: null
    })
  })
})