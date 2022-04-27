// IF YOU KNOW HOW TO WRITE TEST PLEASE CONTRIBUTE

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { HighlightableTextArea } from '../src';

// describe('it', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<HighlightableTextArea children={'test'} />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });

function sum(a: number, b: number) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});