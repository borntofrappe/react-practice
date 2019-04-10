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
class App extends Component {
  // in the state bind the methods updating the state and set up the necessary stateful variables
  constructor() {
    super();
    /*
    beside the quiz,
    round to show each successive question
    score to keep track of the achievement
    showQuiz, showResult, showScore, to toggle the different components making up the application
    */
    this.state = {
      quiz,
      round: 0,
      score: 0,
      isCorrect: false,
      isGiven: 0,
      showQuiz: false,
      showResult: false,
      showScore: false
    }
    this.goToQuiz = this.goToQuiz.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.giveResult = this.giveResult.bind(this);
  }

  // with the goToQuiz function switch the matching boolean to true
  goToQuiz() {
    this.setState({
      showQuiz: true
    })
  }
  // with the goToNextQuestion function update the round to go to the following query
  // if round reaches the end of the quiz, toggle the score component
  goToNextQuestion() {
    const { round, quiz } = this.state;
    if (round < quiz.length - 1) {
      this.setState({
        round: this.state.round + 1,
        showResult: false
      })
    } else {
      this.setState({
        showResult: false,
        showScore: true
      })
    }
  }

  // with the giveResult function set showResult to true as to show the correct option
  // the function is called passing a boolean describing whether the given answer matches the correct option
  // ! in addition to the boolean, the second argument identifies the given answer, through the index
  giveResult(isCorrect, isGiven) {
    // destructure the score out of the state
    const { score } = this.state;

    /* update the state to
      1. show the result
      1. update the isCorrect boolean to show the appropriate heading/icon
      1. update isGiven to style the given answer differently
      1. update the score,
    */
    this.setState({
      showResult: true,
      isCorrect,
      isGiven,
      score: isCorrect ? score + 1 : score
    })
  }

  /* extract the necessary values from the state and render alternatively
  - the landing page by default
  - the quiz page when entering the quiz
  - the score page when the quiz is compoleted
  */
  render() {
    const { quiz, round, isCorrect, isGiven, score, showQuiz, showResult, showScore } = this.state;
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
                isGiven={isGiven}
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
