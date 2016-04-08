'use strict';

require('../main');

var t = require('jsmicro-test');

class People {
    constructor() {
        typeOf.add('People', this);
    }
}

class Contact {
    constructor() {
        typeOf.add('Contact', this);
    }
}

class User extends Object {
    constructor( init ) {
        super(init);
        typeOf.add('User', this);
    }
}

var people = new People();
var contact = new Contact();
var user = new User();

// Call function to give arguments
StartTest('first', 2, [ 'thrid' ]);

function StartTest() {
    // Run the isString() Test.
    t(typeOf)
        .expected(people, 'people')
        .expected(contact, 'contact')
        .expected(user, 'user')
        .expected('Test', 'string')
        .expected([], 'array')
        .expected({}, 'object')
        .expected(() => {}, 'function')
        .expected(false, 'boolean')
        .expected(new Date(), 'date')
        .unexpected(new Date(), 'string')
        .queue(true);
}
