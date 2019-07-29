import React, { Component } from 'react';
import './css/About.css';
// use styled components for the individual elements and Link for routing
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FAQ = styled.ul`
  max-width: 800px;
  width: 90vw;
  margin: 5vh auto;
  list-style: none;
`;
const Question = styled.h3`
  font-size: 1.7rem;
  font-weight: 800;
`;
const Answer = styled.p`
  font-size: 1.3rem;
  opacity: 0.7;
  margin: 0.5rem 0 2rem;
  line-height: 2.5;
`;

const SendOff = styled.blockquote`
  text-align: center;
  margin: 1rem 0;
  font-style: italic;

  a {
    font-size: inherit;
  }
`;
// render the questions and answers in an unordered list
// atop this element detail an anchor link forwarding back to the home path
// below this element add a simple quote-sendoff
class About extends Component {

  render() {
    const faq = [
      {
        id: 0,
        question: 'Come again?',
        answer: 'Simply put, I want to practice with React. The best way is by building as many projects with the library as possible.'
      },
      {
        id: 1,
        question: 'Not much to do here...',
        answer: 'Not yet. Consider this as a hub, in which every future project will be detailed.'
      },
      {
        id: 2,
        question: 'Really nothing to show?',
        answer: 'Beside this landing page, nope. Hopefully by publicly commiting to 30+ projects I\'ll be back with something neat. And soon.'
      },
      {
        id: 3,
        question: 'How about a hint?',
        answer: 'I plan to practice with several dependencies in the React family, like react-router and styled-components. I\'d also like to incorporate data from public APIs.'
      },
      {
        id: 4,
        question: 'Can I expect something tomorrow?',
        answer: 'Not necessarily. I\'d rather wait a day or two to materialize something useful, beautiful, or both rather than compulsively jump on the first idea that comes to mind. That and time is a rare resource these days.'
      },
    ];

    const aboutElements = faq.map(pair => <li key={pair.id}><Question>{pair.question}</Question><Answer>{pair.answer}</Answer></li>);

    return (
      <div className="About" >
        <Link to="/">back</Link>

        <FAQ>
          {
            aboutElements
          }
        </FAQ>

        <SendOff>
          Hope you'll be <Link to="/">back</Link>. I sure will.
        </SendOff >
      </div >
    );
  }
}

export default About;
