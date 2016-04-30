'use strict';

if ( !global.hasOwnProperty('typeOf') ) {
    global.typeOf = typeOf;
}

module.exports = typeOf;

typeOf.add = registerType;
typeOf.raw = rawTypeOf;

// @deprecated! Will be removed on the next release.
typeOf.typeOf = typeOf;

function typeOf( object ) {
    return rawTypeOf(object).replace(/(\[object\s)|(\])/g, '').toLocaleLowerCase();
}

function rawTypeOf( object ) {
    if ( 'undefined' === typeof object ) {
        return '[object Undefined]';
    } else if ( object === null ) {
        return '[object Null]';
    } else {
        return object.constructor.typeof || toString.call(object);
    }
}

function registerType( name, object ) {
    if ( 'string' === typeof name && 'undefined' !== typeof object ) {
        object.constructor.typeof = `[object ${name}]`;
    }
}
