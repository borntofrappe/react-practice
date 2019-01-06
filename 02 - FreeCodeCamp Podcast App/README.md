# React Podcast App

Link to the proud UI [right here on codepen](https://codepen.io/borntofrappe/pen/YdWpXN). Starting point for the application.

Link to the proud UX [right here on codepen](https://codepen.io/borntofrappe/pen/YdGwow). Got carried away with JavaScript, adding functionalities here and there.

Link to the work-in-progress React Application [right here on codepen](https://codepen.io/borntofrappe/full/yGbpMm). Soon to be full-fledged application.

## Preface

For the second project in my **reactice** series, I want to create a simple podcast application, drawing data in from an RSS feed to display information regarding the freeCodeCamp podcast and allow visitors to listen to a specific episode.

In so doing, I plan to practice with:

- react;

- styled components.

In terms of user stories, as to draw inspiration from freeCodeCamp itself, here's what the application should achieve:

- as the page loads, I am welcomed by the podcast application with the latest episodes for freeCodeCamp. I am able to relate to this with a simple image, the title, a brief description and an audio player.

- as I hit the play button, the audio should play.

- I am able to change the position of the audio;

- I am able to change the speed of the audio;

- I am able to change the volume.

In terms of design, I'd like to stretch the application to cover the entirety of the page for viewports smaller than an arbitrary size. On larger devices, I'd like to have the information for the episode on the right, with the left section displaying the image for the podcast.

But that ought to be enough of a plan. Going to work.

## Development

The projects I want to create in the **reactice** series are centered around React, and with this in mind I will create React-powered applications only. That holds true, but this does not prevent me from learning and practicing with concepts outside of the framework's scope. This is clear by the notes which follow, but I just wanted to stress the change in perspective.

This react series is about learning and improving my React skills, but most importantly is about:

- **learning** something new and captivating;

- **practicing** something I'm starting to get;

- **mastering** something I think I understand.

### Pre React

> lessons learned having fun with JavaScript

In approaching the project, I decided to develop one feature at a time, and to start with plain ol' vanilla JavaScript. I took it rather far, and the effort is stored in the **UX Podcast** app folder of this very project. In the same path you find also a **UI Podcast** folder, detailing the design that went into the application, and a **RSS Feed** folder, in which I used the `fetch` method and experimented with a `DOMParser` as to find the information ultimately to-be-framed in the application.

In this last effort, I also discovered how the `http` URL, referenced in the [freeCodeCamp podcast page](https://freecodecamp.libsyn.com/) is unsecure and how freeCodeCamp actually provides a secure option simply changing the prefix to `https`.

### React

> lessons learned developing the React application

#### React Render Props

With this new project I want to fix one of the deficiencies I have with React, namely _render props_. I heard the term thrown around here and there, I caught a glimpse of one instance and seemed to grasp the basics, but I want to really dive into the pattern and understand it. Starting with the [docs](https://reactjs.org/), but mostly considering [this series @leveluptuts](https://www.youtube.com/watch?v=x5oiX93DeHA&list=PLLnpHn493BHGTMs2UmaPUG6Lu3dHrqryY&index=2).

Render props seems to be an efficient way to create _reusable_ components. Like a toggle component which can be used with different content to be toggled.

Scott gives the example of such a toggle component. Starting with the easiest implementation, and progressing in increments.

##### Normal Toggle Component

1. create a component with its own state and structure:

   ```jsx
   import React, { Component } from "react";

   class Toggle extends Component {
     state = {
       on: false
     };
     toggle = () => {
       this.setState({
         on: !this.state.on
       });
     };
     render() {
       return (
         <div className="Toggle">
           {this.state.on && <h2>Toggle toggle</h2>}
           <button onClick={this.toggle}>Show || Hide</button>
         </div>
       );
     }
   }

   export default Toggle;
   ```

1. import the component in the file which needs it:

   ```jsx
   import React, { Component } from "react";
   import Toggle from "./Toggle";

   class App extends Component {
     render() {
       return (
         <div className="App">
           <h1>Oh bother</h1>
           <Toggle />
         </div>
       );
     }
   }
   export default App;
   ```

##### props.children

1. detail the elements inside the imported component:

   ```jsx
   import React, { Component } from "react";
   import Toggle from "./Toggle";

   class App extends Component {
     render() {
       return (
         <div className="App">
           <h1>Oh bother</h1>
           <Toggle>
             <h2>Toggle toggle</h2>
           </Toggle>
         </div>
       );
     }
   }

   export default App;
   ```

1. use `this.props.children`, apparently passed automatically to the nested component. (presumably `this.props.children` makes use of `this` only because of a class component. For stateless components, it should be `props.children`).

   ```jsx
   import React, { Component } from "react";
   import Toggle from "./Toggle";

   class App extends Component {
     render() {
       return (
         <div className="App">
           <h1>Oh bother</h1>
           <Toggle>
             <h2>Toggle toggle</h2>
           </Toggle>
         </div>
       );
     }
   }

   export default App;
   ```

##### Render Props

As in: passing a property to the component which details what needs to be included. This practically means passing a function in a property named `render`.

In App.js:

```jsx
<ToggleRenderProps
  render={() => (
    <div>
      <h2>Toggle toggle</h2>
      <button>Show || Hide</button>
    </div>
  )}
/>
```

In the component itself:

```jsx
render() {
    const { render } = this.props;
    return (
      <div className="ToggleRenderProps">
        {
          render()
        }
      </div>
    );
  }
```

As a function, this is able to accept arguments, allowing to customize the component which is then exported.

```jsx
render() {
    const { render } = this.props;
    return (
      <div className="ToggleRenderProps">
        {
          render('Hello there')
        }
      </div>
    );
  }
```

With a minor adjustment in App.js, to accept arguments.

```jsx
<ToggleRenderProps
  render={message => (
    <div>
      <h2>{message}</h2>
      <button>Show || Hide</button>
    </div>
  )}
/>
```

This shows we can retrieve a particular string value from the child component, but it is also possible to transfer/receive the `toggle` method and the `on` variable.

```jsx
render() {
    const { render } = this.props;
    const { on } = this.state;
    const { toggle } = this;
    return (
      <div className="ToggleRenderProps">
        {
          render({on, toggle})
        }
      </div>
    );
  }
```

Which are then used inside of the `render` function.

```jsx
<ToggleRenderProps
  render={({ on, toggle }) => (
    <div>
      {on && <h2>Wow, ain't this neat</h2>}
      <button onClick={toggle}>Show || Hide</button>
    </div>
  )}
/>
```

Quite neat, quite reusable:

```jsx
<ToggleRenderProps
  render={({ on, toggle }) => (
    <div>
      {
        on &&
        <h2>Wow, ain't this neat</h2>
      }
      <button onClick={toggle}>Show || Hide</button>
    </div>
  )}
/>

<ToggleRenderProps
  render={({ on, toggle }) => (
    <div>
      {
        on &&
        <h2>This one too!</h2>
      }
      <button onClick={toggle}>Show || Hide This One Instead</button>
    </div>
  )}
/>
```

##### Render Props Children

Progressing from render props, we can use the `children` special value for more efficient code. (`render` as a prop is chosen for what it does, but there's nothing special behind the meaning).

The logic is to here use the arrow function _inside_ of the imported component, as if it were a children.

```jsx
import React, { Component } from "react";
import ToggleRPC from "./ToggleRPC";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Oh bother</h1>
        <ToggleRPC>
          {({ on, toggle }) => (
            <div>
              {on && <h2>Wow, ain't this neat</h2>}
              <button onClick={toggle}>Show || Hide</button>
            </div>
          )}
        </ToggleRPC>
      </div>
    );
  }
}

export default App;
```

And then include this function (passed through `props`) in the return statement, with the arguments needded:

```jsx
import React, { Component } from "react";

class ToggleRPC extends Component {
  state = {
    on: false
  };
  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

export default ToggleRPC;
```

I don't see a use-case already, but there's sure a lot of potential in this pattern.

Files available in the **Lessons learned** folder:

- Toggle.js;

- ToggleRenderProps;

- Toggle RPC.

Respectively detailing the simple component-based example, the one using render props, the one using render props children.

### Update 23-12-2018

Started the migration from Vanilla JavaScript to the React framework. There's still aplenty to do:

- immediately start playing other episodes as they are selected;

- rotate the vinyl in unison with the audio;

- update the timestamp with the current time.

Not to mention the most pressing matter: _fixing the component structure_. Currently there exist only one giant component, and the codebase is rather unsustainable. As said, much to do.

### Update 04-01-2019

After perhaps too long a hiatus, I am back working on the unofficial podcast application for freeCodeCamp. I decided to immediately tackle the inconsistecies present in the font and color choices.

- two weights for Lato, for normal and bold text respectively

- a primary color matching the freeCodeCamp theme, accompanied by a lighter and darker variation

- a series of whites, with varying transparency. I acknowledge that it is actually better to use solid colors for most of the UI, but for hover states especially, this first choice is more than enough.

This upfront choice must be enforced in the entirety of the project, but for the time being will reside in the `root` selector of the stylesheet. As I find values throughout the project I will update them to match the custom CSS properties and perhaps detail additional choices.

Following this immediate input, I decided to also restructure the entire application. Indeed, as it stands the application makes use of a single component, `PodcastApp.js`, for the rendering of the correct and styled elements. Breaking up this monolith of a component might aid comprehension.

Here's a slight improvement on the existing structure:

```text
Podcast

  Vinyl
  ProgressBar
  Controls
    ToggleButton
    VolumeButton
    SpeedButton
    StopButton
  Time
  Title

  MoreButton

  MoreEpisodes
    Episodes
      Episode * ??
        Title
        Date
        Duration
        Button
    CloseButton
```

With each indented line explaining nested child components. For the time being I choose not to create a `CurrentEpisode`, but I might section off this section as I wise up.

The idea is to have the application immediately display the current episode and a button allowing to retrieve more episodes. More episodes are displayed only when this button is clicked. As the `MoreEpisodes` component is overlaid on top of the UI, it make sense to extract it into its own separate JavaScript file.

Minor update, I decided to label this last component `PodcastMore`, but the name is not set in stone.

In the end I decided for a major restructuring and create a component for each subset of the application, minor the vinyl (this component is a simple empty div). From 1 component, I currently have 6, which should make further development much easier.

The application is structured as follows:

```text
Podcast
  Vinyl
  Progress
  Controls
  Time
  Title

  Button

  More
```

The application is also much better documented and passes through `props` only values which are necessary for the components to function. Previously, I used to pass a plethora of variables without much consideration. Great, not-so-visible step forward.

### Update 06-01-2019

Once I managed to divide the application into components, adding the tooltip and the possibility to change the current time became immensely easier. Not easy, but definitely a more approachable problem.

I solved this user story by calling the functions on appropriate event listeners:

- `onMouseMove`;

- `onMouseLeave`;

- `onClick`.

I set these event listeners on the progress bar, as the tooltip is positioned relative to this element (through the mouse events) and by clicking on this very element the current time ought to be changed.

In the process, I also decided to show the hours, minutes and seconds in the tooltip and in the `PodcastTime` component in full. At a later stage, I really want to improve this by showing only seconds, minutes or hours, whichever measure of time is greater than zero. For the time being however, I find this measure to the be quickest route to a functioning application.
