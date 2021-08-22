import React from 'react';
import renderer from 'react-test-renderer';
import {it, expect} from 'jest';
import { Hello } from '../hello';

describe ("hello Component", () => {
  it('renders correctly', () => {
    expect.assertions(1);
    const date = new Date('Jul 12 2011');
    const tree = renderer
      .create(<Hello date={date} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});