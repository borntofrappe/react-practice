import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PodcastApp from './PodcastApp.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PodcastApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
