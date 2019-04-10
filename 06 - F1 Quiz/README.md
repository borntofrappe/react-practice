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

The code makes use of the **styled-components** librarym and rather heavily.

It can be definitely improved in terms of code, but in terms of missing features the application misses one important aspect: animation. This will be the topic of a possibly future update.

On its own, the react based application is able to provide a quiz with the given input data. The data can be expanded and modified to consider a topic more thoroughly, or to question on different subjects, and the project succeeds at implementing a rather challenging component struture, to practice with the framework.
