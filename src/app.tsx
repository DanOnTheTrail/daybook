import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './hello';

function render() {
  ReactDOM.render(<Hello date={new Date()} />, document.getElementById('root'));
}

render();