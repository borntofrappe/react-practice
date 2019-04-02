# Double Slider Sign In/ Sign Up Form

Inspired by [this design](https://dribbble.com/shots/5311359-Diprella-Login), and the first challenge in the weekly coding challenge program, the goal of this project is to have a form which visually offers a panel to alternatively sign in or sign up.

Given the considerable challenge behind the project, the effort is split into steps, which progressively lead to the complete form built with React.

## HTML & CSS

I decided to replicate the design at the source of this project as closely as possible. This allowed for plenty of practice with CSS property-value pairs and perhaps most importantly, given the recent projects I've enjoyed, with HTML markup. It is paramount to have a reasonable and sensible DOM structure, without unnecessary containers and quirky hierarchy.

UI available in the **Form UI** folder, as well as [on codepen right here](https://codepen.io/borntofrappe/full/dLPjpp).

## JavaScript

Before diving into React, I also decided to add a minimum of interactivity, with a rather repetitive script. This mainly to find how to actually implement the swapping feature. The idea is to have the panels considered in their size and position, and literally _translate_ each panel where the other one lies.

There are issues regarding the order of the elements, and definitely accessibility, but in a few lines of code, and through the `getBoundingClientRect()` function, the slide can be indeed implemented.

I've decided not to update the pen with this script, but you find the logic in a separate folder, **Form Sliding Panels**.
