import React from 'react';
import { formatDate } from './utils.js';

/*
each icon is included in an svg element with the following structure
    <svg ...>
        <use .../>
    </svg>

it is helpful to extract this logic into a function to avoid repetition
*/
const Icon = (href, width = 30, height = 30) => React.createElement('svg', {
    viewBox: '0 0 100 100',
    width,
    height,
    }, React.createElement('use', {
    href: `#${href}`
}));

const Avatar = Icon('avatar', 80, 80);
const Reply = Icon('reply');
const Retweet = Icon('retweet');
const Like = Icon('like');
const Options = Icon('options');

// div container including the different icons
const Icons = React.createElement('div', {
    className: 'icons'
}, Reply, Retweet, Like, Options);

// functions creating react elements for the name, handle and message, according to the input value
const Name = (name) => React.createElement('h1', null, name);
const Handle = (handle) => React.createElement('h2', null, `@${handle}`);
const Message = (message) => React.createElement('p', null, message);

/* function creating the following construct for the timestamp
    <h3>
    <time...></time>
    </h3>

    the date instance received as input is included in the datetime attribute of the time element
    the lapse is instead displayed using the formatting function created in ./utils.js
*/
const Time = (time) => {
    // ! create the date instance using arguments instead of a string value
    // this means the time property needs a strict format in which the year, hours, minutes, seconds, milliseconds value are specified
    const dateTime = new Date(...time.split(' '));
    const date = formatDate(dateTime);
    return React.createElement('h3', null, React.createElement('time', {
        dateTime,
    }), `${date}`);
};

/* function creating a div container for the desired markup
accept as argument an object with default arguments, displayed if the input object fails to provide the matching fields
! include a default empty object to have a value also when the function is called without arguments at all
*/
const Tweet = ({name = 'Pas', handle = 'paslepoulet', time = new Date('2019 10 3'), message = 'Binary, sidewinder, Aldous-Broder...I wonder which maze I\'ll explore next!'} = {}) => React.createElement('div', {
        className: 'tweet'
    },
    Avatar,
    Name(name),
    Handle(handle),
    Time(time),
    Message(message),
    Icons
);

export default Tweet;