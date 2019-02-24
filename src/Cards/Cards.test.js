import React from 'react';
import Cards from './Cards';
import { shallow } from 'enzyme';

describe ('Cards', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Cards />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it ('should have default states', () => {
    expect(wrapper.state()).toEqual({
      inputBox: '',
      question: this.props.question,
      correct: null
    })
  })
})