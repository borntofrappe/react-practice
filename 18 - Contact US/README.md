# [Contact US](https://codepen.io/borntofrappe/full/PowJQew)

## Goal

Starting from the [freeCodeCamp challenge identifying a valid US phone number](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator), create an interactive form to check for a valid US phone number.

## Notes

In the **res** folder you find the SVG graphic(s) created for the project. By clicking on the window you can toggle between the two assets describing a US flag and a contact card:

- the flag was inspired by the actual flag of the US. I found it refreshing and somehow novel how it is possible to omit certain parts of the graphic (the background for the stars, half of the stripes) and still retain the visual's message

- the contact card was actually inspired by [this icon from Google's material design system](https://material.io/resources/icons/?icon=contact_phone&style=baseline). The corners were more of an experiment to see how the `transform` property would work, but I found them a pleasant addition

From these two assets, the idea is to provide an application which allows to fill in a contact card. If the input matches a valid US phone number, the idea is to then swap the default graphic with the US flag.

## Update

While at first I wanted to experiment with 3D transform properties, so to rotate the card with a bit of perspective, I decided to instead focus on an animation below the input element. This inspired by [this screencast](https://www.youtube.com/watch?v=D0fzZtj05Ag) from the [keframers](https://twitter.com/keyframers).

For an idea of what I wanted to achieve prior to this update, you can see [this application using Svelte](https://njbcg.codesandbox.io/).

## Links

- [Project in the freeCodeCamp curriculum inspiring the card](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)

- [Icon from Google's material design system replicated for the contact card](https://material.io/resources/icons/?icon=contact_phone&style=baseline)

- [@keyframers episode describing the React animation](https://www.youtube.com/watch?v=D0fzZtj05Ag)
