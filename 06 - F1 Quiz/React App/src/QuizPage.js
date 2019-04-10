import React, { Component } from 'react';
// import the svg component and the necessary styled components
import SVGIcon from './SVGIcon';
import { Question, Answers, Answer, Button, Results, Result, Details } from './style/components';

// in the component extract the necessary information and display the question/buttons/answer according to the quiz logic
class QuizPage extends Component {

  render() {
    const { showResult, isCorrect, isGiven } = this.props;
    const { question, answers, correct, details } = this.props.quiz;
    return (
      <>
        <Question>
          {
            question
          }
        </Question>

        <Answers>
          {
            // make the onClick conditional to the result **not** being shown
            // when the result **is** shown pass properties to highlight the correct/wrong/given nature of the options
            answers.map((answer, index) => <Answer
              key={answer.answer}
              onClick={() => !showResult && this.props.giveResult(correct === index, index)}
              isCorrect={showResult && correct === index}
              isGiven={showResult && isGiven === index}
              showResult={showResult}
              >
              {
                answer.answer
              }
            </Answer>)
          }
        </Answers>

        {/* show the result elements only when one of the button has been pressed */}
        {
          showResult &&
          <>
            <Results>
              {
                isCorrect
                  ?
                  <Result isCorrect={isCorrect}>
                    <SVGIcon icon="v" size="42" />
                    Correct
                  </Result>
                  :
                  <Result isCorrect={isCorrect}>
                    <SVGIcon icon="x" size="42" />
                    Wrong
                  </Result>
              }
              <Details>
                {
                  details
                }
              </Details>
            </Results>
            <Button onClick={this.props.goToNextQuestion}>Next</Button>
          </>
        }

      </>
    );
  }
}

export default QuizPage;
