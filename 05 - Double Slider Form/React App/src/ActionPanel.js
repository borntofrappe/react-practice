import React from 'react';
import './css/ActionPanel.css';

// stateless component for the panel prominently featuring the button to enable the slide function
const ActionPanel = ({ signIn, slide }) => {
  // content to show conditional to the signIn boolean
  const heading = signIn ? 'Hello friend!' : 'Welcome back!';
  const paragraph = signIn ? 'Enter your personal details and start your journey with us' : 'To keep connected with us please login with your personal info';
  const button = signIn ? 'Sign up!' : 'Sign in!';

  // render the elements and includ the slide function when pressing the button
  return (
    <div className="Panel ActionPanel">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <button onClick={slide}>{button}</button>
    </div>
  );
};

export default ActionPanel;