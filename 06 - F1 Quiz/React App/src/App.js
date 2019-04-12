import React, { Component } from 'react';
// import the necessary components
import LandingPage from './LandingPage';
import QuizPage from './QuizPage';
import ScorePage from './ScorePage';
// import the sytled components making up the <main> container
import { Main } from './style/components';
// import the array describing the input dataset
import { quiz } from './data/quiz';

// app component, managing the entire application and its state
class App extends React.Component {
  // in the state bind the methods updating the state and set up the necessary stateful variables
  constructor() {
    super();
    /*
    beside the quiz,
    - round, to show each successive question
    - score, to keep track of the achievement
    - isCorrect, to include the appropriate response to the given answer
    - choice, to keep track of the fan's choice
    showQuiz, showResult, showScore, to toggle the different components making up the application
    */
    this.state = {
      quiz,
      round: 0,
      score: 0,
      isCorrect: false,
      choice: 0,
      showQuiz: false,
      showResult: false,
      showScore: false
    }
    /* functions updating the state and allowing to
    1. move to the quiz page,
    1. show the correct option
    1. move to the next round of the quiz
    1. move to the score page

    */
    this.goToQuiz = this.goToQuiz.bind(this);
    this.giveResult = this.giveResult.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.goToScore = this.goToScore.bind(this);
  }

  // with the goToQuiz function switch the matching boolean to true
  goToQuiz() {
    this.setState({
      showQuiz: true
    })
  }

  // with the goToNextQuestion function update the round to go to the following query
  // if round reaches the end of the quiz, call the goToScore function
  goToNextQuestion() {
    const { round, quiz } = this.state;
    if (round < quiz.length - 1) {
      this.setState({
        round: this.state.round + 1,
        showResult: false
      })
    } else {
      this.goToScore()
    }
  }

  // with the goToScore function switch the matching boolean to true
  goToScore() {
    this.setState({
      showScore: true
    })
  }

  // with the giveResult function set showResult to true as to show the correct option
  /* the function is called with two integer values
  - correct, describing the correct option
  - choice, describing the given option

  */
  giveResult(correct, choice) {
    // destructure the score out of the state
    const { score } = this.state;
    // determine whether the given answer is correct (to show the appropriate heading/icon in the result section)
    const isCorrect = correct === choice;

    /* update the state to
      1. show the result
      1. describe the correct/wrong nature of the guess
      1. describe the given answer
      1. update the score if need be
    */
    this.setState({
      showResult: true,
      isCorrect,
      choice,
      score: isCorrect ? score + 1 : score
    })
  }

  /* extract the necessary values from the state and render alternatively
  - the landing page by default
  - the quiz page when entering the quiz
  - the score page when the quiz is compoleted
  */
  render() {
    const { quiz, round, isCorrect, choice, score, showQuiz, showResult, showScore } = this.state;

    return (
      <Main>
        {
          showScore ?
            <ScorePage
              score={score}
              max={quiz.length}
            />
            :
            showQuiz
              ?
                <QuizPage
                  quiz={quiz[round]}
                  giveResult={this.giveResult}
                  isCorrect={isCorrect}
                  choice={choice}
                  showResult={showResult}
                  goToNextQuestion={this.goToNextQuestion}
                />
              :
              <LandingPage
                goToQuiz={this.goToQuiz}
              />
        }
      </Main>
    );
  }
}

export default App;
