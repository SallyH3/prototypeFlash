import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const mockLink = [];

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
      <App getLink={mockLink}
      />
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
    currentSelection: ''
});
});
});