# angular-interview-exercise

## Submitting your response
Please clone this repo into your Github.com account, and then when you are done with the exercise, open a pull request with your changes back into this repo.

## Project Setup

1. Make sure you have NodeJS installed, [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Install Bower
   - `npm install -g bower`
3. Get Angular and the other libraries added locally
   - `bower install`
4. Run the local web server, which is pre-configured in package.json within `scripts`
   - `npm run dev`
   
## Overview

Once you have the app running in your browser, you're ready to start.

[http://localhost:8081/](http://localhost:8081/)

The HTML is divided into 2 sections, each using the same controller definition:

```html
<div class="app" ng-app="interviewExercise" ng-controller="genericController">
    <div>
        <h1>I am the main set of items</h1>
    </div>


    <div ng-controller="genericController">
        <h2>I'm a 2nd instance of the controller</h2>
    </div>

    
</div>
```

### Exercise 1) Start with the outer controller, and do the following

1. `Controller.js` is already hooked up to ng-app and is the default controller
2. Can you get the controller to load data from `items.json` and populate the scope?
3. Can you make it so that the data is only loaded once the user clicks the `<a>` link on the page (in index.html)
4. Can you get the controller's `memoryCleanup` method to get called when the scope is destroyed?


### Exercise 2) For the inner controller, do the same thing.
This should only require editing index.html at this point
