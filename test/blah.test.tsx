import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HighlightableTextArea } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HighlightableTextArea children={'test'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
