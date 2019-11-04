import React from 'react';
import { formatDate } from './utils.js';

// since the syntax required for the icons repeats itself, create a component to render the desired use element
function Icon({href = 'like', width = 30, height = 30}) {
  return (
    <svg viewBox="0 0 100 100" width={width} height={height}>
      <use href={`#${href}`}></use>
    </svg>
  )
}

// render the elements in the desired markup
function Tweet({name = 'Pas', handle = 'paslepoulet', time = new Date('2019 10 3'), message = 'Binary, sidewinder, Aldous-Broder...I wonder which maze I\'ll explore next!'} = {}) {
  // ! create the date instance using arguments instead of a string value
  // this means the time property needs a strict format in which the year, hours, minutes, seconds, milliseconds value are specified
  const dateTime = new Date(...time.split(' '));
  const date = formatDate(dateTime);

  return (
    <div className="tweet">
      <Icon href="avatar" width={80} height={80} />
      <h1>{name}</h1>
      <h2>@{handle}</h2>
      <h3>
        <time dateTime={dateTime}>{date}</time>
      </h3>
      <p>{message}</p>
      <div className="icons">
        <Icon href="reply" />
        <Icon href="retweet" />
        <Icon href="like" />
        <Icon href="options" />
      </div>
    </div>
  );
}

export default Tweet;
