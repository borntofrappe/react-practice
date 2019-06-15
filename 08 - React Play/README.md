# React Play

## Goal

Recreate the interactive carousel as highlighted in the [F1 Play gaming website](https://www.formula1.com/en/gaming/f1-play.html).

## Development

### UI

While the project is meant to be a React application, it is first designed with HTML markup and a single CSS stylesheet. The UI doesn't recreate the entirety of the carousel, but only of a card in said carousel. Given the predominance of the component however, I though it best to dedicate a coding session to the layout and style of the element.

You can find the UI in the dedicated subfolder of this repo, or online [@codepen](https://codepen.io/borntofrappe/full/ZdbeJw).

### Components

Starting from the UI developed with HTML and CSS only, the application considers the following components:

- `Card`, the container displaying the question and the list of options;

- `CardHeader`, describing the query and the number of the card within the context of the carousel;

- `CardSelection`, the container ultimately including the option selected from the options below;

- `CardOptions`, describing the list of possible answers each through a button.

### State

The necessary information is included through two objects, specifying the riders and the predictions included each in a card. There's a bit of massaging to retrieve the desired data structure, but the logic highlighted in the `componentDidMount` callback is rather straightforward.

The application is developed at first with a class component, in `App.js`. At a later stage I'd like to refactor the project to use **hooks**, but to practice with both syntaxes and the framework as a whole I considered the duplication to be worth the extra effort. It is most likely I will dedicate a separate folder, just like for the UI, to the class-based application and have the files in the root path describe the hook-powered solution.