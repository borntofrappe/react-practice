import ReactDOM from 'react-dom';
import Tweet from './Tweet.js';

const data = {
    name: 'Pas',
    handle: 'paslepoulet',
    /* specify the date instance with a string of arguments
    up to seven arguments
     year month (0-11) day hours minutes seconds milliseconds
    */
    time: '2019 10 4 18 43',
    message: 'Exploring React\'s own abstractions, starting with React.createElement()',
};

const tweet = Tweet(data);
const root = document.querySelector('#root');
ReactDOM.render(tweet, root);
