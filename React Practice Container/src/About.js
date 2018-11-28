// with a stqteless component detail the about section as a series of question and answers
import React, { Component } from 'react';
// import './css/About.css';

class About extends Component {

  render() {
    const faq = [
      {
        id: 0,
        question: 'Come again?',
        answer: 'reactice is a simple attempt at improving React skills, by creating 30+ applications with the library and connected dependency.'
      },
      {
        id: 1,
        question: 'Not much to do here...',
        answer: 'This page functions as the hub for every coming application. As one gets developed and published online, it\'d be the my highest priority to (include) append the working project.'
      },
      {
        id: 2,
        question: 'Coulnd\'t you just create something before the landing page?',
        answer: 'I sure could have, but publicly commiting to developing these projects is enough of a push to guarantee that something will be done. And sooner rather than later.'
      },
      {
        id: 3,
        question: 'How about a hint?',
        answer: 'I plan to practice with several dependencies in the React family, like react-router and styled-components. I\'d also like to incorporate data from external APIs. That being said, I\'d rather wait a day or two to materialize something useful &| beautiful rather than compulsively jump on the first idea that comes to mind.'
      },
    ];

    // render a button, allowing to move back to the main path
    // render a list of items for the questions and answer, atop a small parting element
    const faqElements = faq.map(pair => {
      return `
        <li key=${pair.id}>
          <h3>${pair - question}</h3>
          <p>${pair.answer}</p>
        </li>
      `;
    })

    return (
      <div className="About">
        <button>back</button>

        {
          faqElements
        }

        <blockquote>
          Hope you'll be back. I sure will.
        </blockquote>
      </div>
    );
  }
}

export default About;
