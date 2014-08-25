# State.js - Stateful Javascript Object

State.js provides evented State objects.

## Installation

State.js is available via bower:

    bower install State.js

## Usage

Create a new State object

    var myState = State.create(['prop1', 'prop2', 'otherCoolProperty']);

We can also set some initial values

    var myState = State.create(['prop1', 'prop2'], {prop1: 'hello', prop2: 'bye'});

States can be created from Javascript Objects

    var myState = State.fromObject({prop1: 'hello', prop2: 'bye'});

You can listen for state changes using pub/sub through [Event.js](https://github.com/gfarrell/Event.js).

    myState.subscribe('change', function(property, newVal, oldVal) {
        console.log(property + ' changed from ' + newVal + ' to ' + oldVal);
    });
    myState.prop1 = 'bonjour';
    // get "prop1 changed from hello to bonjour" in the console

For more details on the pub/sub API look at [Event.js](https://github.com/gfarrell/Event.js).

States can also be copied easily

    myStateCopy = myState.copy();

And properties can be iterated over via `forEach`:

    myState.forEach(function(prop, val) {
        console.log(prop + ': ' + val);
    }/*, thisArg*/);
