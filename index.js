(function () {
    'use strict';

    if ( !window.hasOwnProperty('typeOf') ) {
        window.typeOf = typeOf;
    }

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
            object.constructor.typeof = '[object ' + name + ']';
        }
    }
})();
