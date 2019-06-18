# Double Slider Form

## Links

- [Form UI](https://codepen.io/borntofrappe/full/dLPjpp)

- [Completed Project](https://codepen.io/borntofrappe/full/OGyJbm)

## Preface

Inspired by [this design](https://dribbble.com/shots/5311359-Diprella-Login), and the first challenge in the weekly coding challenge program, the goal of this project is to have a form which visually offers a panel to alternatively sign in or sign up.

Given the considerable challenge behind the project, the effort is split into steps, which progressively lead to the complete form built with React.

## HTML & CSS

I decided to replicate the design at the source of this project as closely as possible. This allowed for plenty of practice with CSS property-value pairs and perhaps most importantly, given the recent projects I've enjoyed, with HTML markup. It is paramount to have a reasonable and sensible DOM structure, without unnecessary containers and quirky hierarchy.

UI available in the **Form UI** folder, as well as on codepen (as referenced above).

## JavaScript

Before diving into React, I also decided to add a minimum of interactivity, with a rather repetitive script. This mainly to find how to actually implement the swapping feature. The idea is to have the panels considered in their size and position, and literally _translate_ each panel where the other one lies.

There are issues regarding the order of the elements, and definitely accessibility, but in a few lines of code, and through the `getBoundingClientRect()` function, the slide can be indeed implemented.

I've decided not to update the pen with this script, but you find the logic in a separate folder, **Form Sliding Panels**.

## React

With the markup, and stylesheet detailed without frameworks, designing the project is a matter of creating a few components. Immediately the framework proves to be excellent for the project at hand, as it allows to rapidly switch the content based on a single boolean value. This is especially useful considering how the project needs to ultimately display two sets of instructions, for the sign in **and** sign up forms.

The sliding feature is implemented with the basic idea distilled in the script mentioned earlier, but it is also improved through a series of modifications. Mainly, these relate to:

- having the order of the elements actually change when the translation is complete.

- transitioning not only the panels, but also the elements of the panel **not** containing the input elements. Only these elements ought to be transitioned out and into view, as the other elements are hidden when the content actually changes.

Overall it is a rather intriguing solution:

- transition each panel where the other one lies;

- transition the elements of the panel without input elements, out of view and faster than the panels' counterpart;

- mid-transition, and when the elements are out of sight, change the content of the panels. As the panel without input elements overlaps on the other one, the immediate change is visually hidden.

- transition the elements into view as the panels finish their transition and come to reside where they ought to.

Together with a few `setTimeout` function, and a boolean preventing to run the same logic _before_ the transition is complete, the approach allows to complete the purpose of the project.
