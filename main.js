'use strict';

if ( !global.hasOwnProperty('typeOf') ) {
    global.typeOf = typeOf;
}

module.exports = { typeOf };

typeOf.add = registerType;
typeOf.raw = rawTypeOf;

function typeOf( object ) {
    return rawTypeOf(object).replace(/(\[object\s)|(\])/g, '').toLocaleLowerCase();
}

function rawTypeOf( object ) {
    return object.constructor.typeof || toString.call(object);
}

function registerType( name, object ) {
    if ( 'string' === typeof name && 'undefined' !== typeof object ) {
        object.constructor.typeof = `[object ${name}]`;
    }
}
