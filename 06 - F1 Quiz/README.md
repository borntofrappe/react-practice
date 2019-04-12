# React F1 Quiz

UI designed [right here](https://codepen.io/borntofrappe/pen/GLrXPR).

React app [live right here](https://codepen.io/borntofrappe/pen/pBeMzz).

## Preface

The goal of this project is to replicate the quiz proposed each race week on the F1 official website. For reference and for the latest quiz at the time of writing, see [this page](https://www.formula1.com/en/latest/article.quiz-put-your-chinese-grand-prix-knowledge-to-the-test-2019.dUcW90JWJSAw9xhf75LSJ.html).

A good pretext to practice with React and perhaps a tad of CSS and SVG, for transitions and a couple of icons respectively.

## UI

The application is immediately designed in vanilla HTML and CSS.

- in **Quiz Intro** the first page introducing the quiz is crafted with a sample image and a giant bold button;

- in **Quiz Query** the structure highlighting the actual quiz is designed. I tried to add comments to the different portions, but the overlap between the two must be carefully considered).

- in **Quiz Outro** the application is completed with the layout used to share a particular score.

## React

With the provided UI elements, the application is made interactive through the React framework. In the **React App** folder you find all the files created for such an occasion.

It makes heavy use of the **styled components** library, for the style of most elements and also to animate the buttons, as they are hovered and selected. I am still discovering how to properly use the styling library, but it allows to include different property-value pairs based on the props passed to the different components. This allows to rapidly customize the elements as needed.
