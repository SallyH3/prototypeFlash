import React from 'react';
import FilteredControls from './FilteredControls';
import { shallow } from 'enzyme';

describe ('FilteredControls', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FilteredControls
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});