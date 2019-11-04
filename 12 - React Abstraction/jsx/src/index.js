import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet.js';

const data = {
    name: 'Pas',
    handle: 'paslepoulet',
    /* specify the date instance with a string of arguments
    up to seven arguments
     year month (0-11) day hours minutes seconds milliseconds
    */
    time: '2019 10 4 20 0',
    message: 'Exploring React\'s own abstractions, leveling up with JSX',
};

ReactDOM.render(<Tweet {...data} />, document.getElementById('root'));
