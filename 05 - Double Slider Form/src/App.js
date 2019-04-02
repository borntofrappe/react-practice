import React, { Component } from 'react';
import './css/App.css';
import FormPanel from './FormPanel';
import ActionPanel from './ActionPanel';

// main component managing the state of the application, detailing the slide function and rendering the necessary components
class App extends Component {
  constructor() {
    super();
    this.state = {
      // boolean to determine which set of panels to show
      // determining also the content of the panels
      signIn: true,
      // boolean to avoid having the slide function run before the transition is completed
      transition: false
    }
    // bind the slide function to update the state
    this.slide = this.slide.bind(this);
  }
  slide() {
    // retrieve the signIn boolean
    const { signIn, transition } = this.state;

    // if already transitioning, pre-emptively escape the function
    // else continue applying the slide effect
    if (transition) {
      return;
    }

    // target the two panel elements
    const formPanel = document.querySelector('.FormPanel');
    const actionPanel = document.querySelector('.ActionPanel');
    // retrieve the child elements of the action panel (to transition them in and out of view)
    const actionPanelChildren = actionPanel.children;

    // continue only if the elements are not transitioning
    // retrieve the bounding box allowing to decipher the position and size of the elements
    const formBoundingRect = formPanel.getBoundingClientRect();
    const actionBoundingRect = actionPanel.getBoundingClientRect();

    // apply a transition (later removed to re-arrange the position of the elements without visual modification)
    formPanel.style.transition = 'all 0.7s cubic-bezier(.63,.39,.54,.91)';
    actionPanel.style.transition = 'all 0.7s cubic-bezier(.63,.39,.54,.91)';
    // apply a transiton to the child elements of the second panel as well
    [...actionPanelChildren].forEach(child => child.style.transition = 'all 0.35s cubic-bezier(.63,.39,.54,.91)');

    this.setState({
      transition: true
    })

    // if signing in slide the form panel to the right, the action panel the other way
    if (signIn) {
      // by an amount equal to the other element's width
      formPanel.style.transform = `translateX(${actionBoundingRect.width}px)`;
      actionPanel.style.transform = `translateX(${-formBoundingRect.width}px)`;

      // transition the child elements out of sight in a direction opposite to the action panel
      [...actionPanelChildren].forEach(child => {
        child.style.transform = `translateX(${actionBoundingRect.width / 2}px)`;
        child.style.opacity = 0;
        child.style.visibility = 'hidden';
      });

      // ! update the border radius as well
      formPanel.style.borderRadius = '0 20px 20px 0';
      actionPanel.style.borderRadius = '20px 0 0 20px';
    } else {
      // else translate the elements back to where they sat earlier
      // ! not to translateX(0), as their position is actually and soon modified
      formPanel.style.transform = `translateX(${-actionBoundingRect.width}px)`;
      actionPanel.style.transform = `translateX(${formBoundingRect.width}px)`;

      [...actionPanelChildren].forEach(child => {
        child.style.transform = `translateX(${-actionBoundingRect.width / 2}px)`;
        child.style.opacity = 0;
        child.style.visibility = 'hidden';
      });


      formPanel.style.borderRadius = '20px 0 0 20px';
      actionPanel.style.borderRadius = '0 20px 20px 0';

    }
    // ! update the state before the transition has a chance to complete, to have the content appear
    const timeoutState = setTimeout(() => {

      // remove the transition on the child elements to reposition them on the opposite side of the incoming direciton
      [...actionPanelChildren].forEach(child => {
        child.style.transition = 'none';
        child.style.transform = `translateX(${signIn ? (-actionBoundingRect.width / 3) : (actionBoundingRect.width / 3)}%)`;
      });

      this.setState({
        signIn: !signIn
      });

      clearTimeout(timeoutState);
    }, 350);

    const timeoutChildren = setTimeout(() => {
      // transition the child elements back into view
      [...actionPanelChildren].forEach(child => {
        child.style.transition = 'all 0.35s cubic-bezier(.63,.39,.54,.91)';
        child.style.transform = `translateX(0)`;
        child.style.opacity = 1;
        child.style.visibility = 'visible';
      });
      clearTimeout(timeoutChildren);
    }, 400);

    // after the transition is complete
    const timeoutTransition = setTimeout(() => {
      // remove the transition
      formPanel.style.transition = 'none';
      actionPanel.style.transition = 'none';
      // immediately remove the translation and re-arrange the elements to have the action panel effectively to the left
      // ! accessibility concerns
      formPanel.style.transform = 'translate(0)';
      actionPanel.style.transform = 'translate(0)';
      actionPanel.style.order = signIn ? -1 : 1;

      this.setState({
        transition: false
      })

      clearTimeout(timeoutTransition);
    }, 700);

  }
  // include the two panels with the content dictated by the boolean
  render() {
    return (
      <div className="App">
        <FormPanel signIn={this.state.signIn} />
        <ActionPanel signIn={this.state.signIn} slide={this.slide} />
      </div>
    );
  }
}

export default App;
