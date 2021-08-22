import React from 'react';
import renderer from 'react-test-renderer';
import { Hello } from '../hello';

describe ("hello Component", () => {
  it('renders correctly', () => {
    expect.assertions(1);
    const tree = renderer
      .create(<Hello />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});