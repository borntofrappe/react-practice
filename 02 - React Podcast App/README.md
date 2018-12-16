# React Podcast App

<!-- Link to the proud (and live!) result [right here on codepen]() -->

## Preface

For the second project in my practice-with-react series, I want to create a simple podcast application, drawing data in from an RSS feed to display information regarding the freeCodeCamp podcast and allow visitors to listen to a specific episode.

In so doing, I plan to practice with:

- react;

- styled components.

In terms of design patterns, I intend to implement a "skeleton" of the content which is to be displayed, before the content is actually displayed. Something which was heavily discussed for one of the codepen challenges of October.

In terms of user stories, as to draw inspiration from freeCodeCamp itself:

- as the page loads, I am welcomed by the podcast application with the latest episodes for freeCodeCamp. I am able to relate to this with a simple image, the title, a brief description and an audio player.

- as I hit the play button, the audio should play.

- I am able to change the position of the audio;

- I am able to change the speed of the audio;

- I am able to change the volume.

In terms of design, I'd like to stretch the application to cover the entirety of the page for viewports smaller than an arbitrary size. On larger devices, I'd like to have the information for the episode on the right, with the left section displaying the image for the podcast.

But that ought to be enough of a plan. Going to work.

## Development

### UI

The react-based project needs to manage information from an RSS Feed. However, this information needs to be showcased somewhere. This is why I decided to spent an entire coding session (and a half) creating a UI for the application. Ultimately I think it'll have to change, to accommodate for more functionalities (speed rate, hello?), but it is a good starting point. Solid foundations.

The UI can be found in the **UI Podcast App** folder. Beside this one, **UX Podcast App** contains the same UI, with a bit of JavaScript to use hard coded values in a half-functioning prototype.

## Lessons Learned

In which I detailed those concepts I learned about React which are connected to the library, but not strictly the project at hand.

### Render Props

With this new project I want to fix a deficiency I have in my React portfolio: understanding _render props_. I heard the term thrown around here and there, I caught a glimpse of one instance and seemed to grasp the basics, but I want to really dive into the pattern and understand it. Starting with the [docs](https://reactjs.org/), but mostly considering [this series @leveluptuts](https://www.youtube.com/watch?v=x5oiX93DeHA&list=PLLnpHn493BHGTMs2UmaPUG6Lu3dHrqryY&index=2).

Render props seems to be an efficient way to create _reusable_ components. Like a toggle component which can be used with different content to be toggled.

Scott gives the example of such a toggle component. Starting with the easiest implementation, and progressing in increments.

#### Normal Toggle Component

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

#### props.children

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

#### Render Props

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

### Render Props Children

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
