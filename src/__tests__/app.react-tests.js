import React from 'react';
import renderer from 'react-test-renderer';
import {it, expect} from 'jest';
import { Hello } from '../hello';

it('renders correctly', () => {
  const tree = renderer
    .create(<Hello />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});