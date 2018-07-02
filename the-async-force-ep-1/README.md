# The-Async-Force-Ep-1
An **async** Exercise using **client side** XHR accessing the swapi API at https://swapi.co



## Excercise
*Remember to commit after each step.*

2. Make a `/js` folder and create an `app.js` file in it.
4. In the `index.html` file, load `app.js` via script tags.
5. Use live-server to serve up the files to your browser.
6. Construct your XHR requests in the `app.js` file to the following endpoints and retrieve the data specified.

   _the instructions below will mention ids and classes from index.html, study that document_

  1. Get a Person object from the SWAPI, https://swapi.co/api/people/4/
      - fill in `person4Name` with the value of Person's `name`
      - fill in `person4HomeWorld` with the value of Person's `homeworld` (name)
  1. Get a Person object from the SWAPI, https://swapi.co/api/people/14/
      - fill in `person14Name` with the value of Person's `name`
      - fill in `person14Species` with the value of Person's (first) `species` (name)
  1. Get a list of all the films from the SWAPI, https://swapi.co/api/films/
      - fill in `filmList` with a new `<li>` element for each `film`
          - fill in each film's `filmTitle` with the title of the `film`
          - create a new `<li>` in this film's `filmPlanets` for each `planet` that appeared in this `film`
              - fill in each `planetTitle` with the name of the `planet`


## Hints
1. Slides on Async HTTP Request with XHR: http://slides.com/sgnl/xhr#/
1. Documentation on 'XMLHttpRequest' method:
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
1. Remember that this is a **client side** excercise which means that all the code will be executed via the browser's javascript runtime, which means that our global context is the 'window' object.  Go ahead and type in 'window' in the browser console to inspect the methods on the 'window' object.  In there you will find a method named 'XMLHttpRequest' which you will be using for this excercise.
