import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

function run() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
