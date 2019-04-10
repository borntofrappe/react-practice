import React from 'react';
// import the SVG component
import SVGIcon from './SVGIcon';
// import the necessary styled components
import { Figure, Image, Icon, Button } from './style/components';

// stateless component rendering the landing page
// extract the goToQuiz function
const LandingPage = ({ goToQuiz }) => {
  // display the button leading to the quiz below an image, using the styled components
  return (
    <>
      <Figure>
        <Image
          alt="Time lapse photography of dashing lights"
          src="https://images.pexels.com/photos/842654/pexels-photo-842654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <Icon>
          <SVGIcon icon="?" />
        </Icon>
      </Figure>

      <Button onClick={() => goToQuiz()}>
        Start
      </Button>
    </>
  );
}

export default LandingPage;
