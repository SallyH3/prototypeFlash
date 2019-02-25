import React from 'react';
import Cards from './Cards';
import { shallow } from 'enzyme';

describe ('Cards', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Cards
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});