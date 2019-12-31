# Contact US

## Goal

Starting from the [freeCodeCamp challenge identifying a valid US phone number](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator), create an interactive card to laminate a hypothetical contact.

## Notes

In the **res** folder you find smaller projects developing different parts of the application.

### SVG

SVG assets created for the project. By clicking on the window you can toggle between the two graphics describing a US flag and a contact card.

- the flag was inspired by the actual flag of the US. I found it refreshing and somehow novel how it is possible to omit certain parts of the graphic (the background for the stars, half of the stripes) and still retain the visual's message.

- the contact card was actually inspired by [this icon from Google's material design system](https://material.io/resources/icons/?icon=contact_phone&style=baseline). The corners were more of an experiment to see how the `transform` property would work, but I found them a pleasant addition.

From these two assets, the idea is to provide an application which allows to fill in a contact card, with:

- name;

- email;

- job description;

- phone number.

If the phone number matches a valid US phone number, the idea is to then swap the default graphic with the US flag.

This is already a good way to practice with a few `<input>` elements, perhaps with different types. On top of this practice however, I'd like to add through a toggle a way to style the card further. The idea is to add a button which allows to switch between the default form, allowing to fill in the different fields, and an actual card, sort of a "locked" version just detailing the different fields, sans input. In this last instance, I'd like to use a bit of perspective and 3D transform properties to rotate the card following the mouse cursor.

### 3D Transform

Here I apply a 3D rotation to the SVG, according to the mouse position relative to the window's width and height. It's also the first time I've used the shorter syntax for the rotation, through the `rotate3d` value, but I found the formula to be rather convenient.

```css
svg {
  transform: rotate(x, y, 0, angle);
}
```

`x` and `y` can then describe a number between `-1` and `1`, leading up to a rotation in the `[-angle, angle]` range. There's no need to include a linear scale to map the input values to a desired range.

## Links

- [Project in the freeCodeCamp curriculum inspiring the card](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)

- [Icon from Google's material design system replicated for the contact card](https://material.io/resources/icons/?icon=contact_phone&style=baseline)
