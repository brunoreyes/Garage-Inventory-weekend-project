# Garage Inventory Weekend Project

In this week's assignment, you've been given a project that allows users to add cars to a garage. Your assignment is to use jQuery to connect this functionality to the DOM. Also, make sure to add some styling via CSS.

![Garage](https://tinyurl.com/yxumqg3f)

## Existing Script

You will need to source jQuery in your index.html in order to complete this assignment. If you need some help doing this, take a look at the instructions [here](jQuery_instructions.md).

You'll find that a 'client.js' file already exists and is linked to the HTML file. In here most of the scripting logic is already working. When run, the "newCar" function creates a new car object and pushes it into the "garage" array.

You can test these by running the following commands in the console:

- `garage` (will show an empty array at first)
- `newCar(1991, 'Plymouth', 'Horizon')`
- `garage` (should now show an array with the one car input above within)

You should not change the `newCar` function for base mode. Some of the stretch goals may require a change.

## Assignment

### Required Features

[x] 1. Add an interface for the user to add cars to the garage with 3 input fields:

- year
- make
- model

Also an "add car" button that, when clicked, _uses the existing "newCar" function_ to add a car to the garage.

[x] 2. Display the cars in the garage in an unordered list on the DOM.

[x] 3. Add some styling via a CSS file (the file has been created, you need to source it into your HTML)

**REMINDER**: Make sure to respond to this week's Slack discussion question!

### Stretch Goals

[x]

- Clear inputs when a car is added
- don't allow a car to be added if any fields are left blank
- have a maximum number of spaces in the garage. Disable inputs if the garage is full
- add another input field, this one should take in text for a url to an image (like a Google image result when you search for `car`), add it to the object with the rest of the car's information, and display the image (using an `<img>` tag) for each car as well as its year/make/model text
- add another required input field, this one should take in the price of the car. The price should be listed on the DOM
- The total price for all of the cars in the garage should be listed at the top of the DOM, and it should be updated every time a new car is added
- Add animation to your images to show the new cars being parked in the garage
