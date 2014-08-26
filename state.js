/* global define, TypeError */
var _module = function(Vent) {
    'use strict';

    var exp = {
        create: function(props, initial_values) {
            var _state = {};
            var State  = {};
            var _enum  = [];

            initial_values = initial_values || {};

            if(typeof props != 'object') {
                throw new TypeError('First argument of State.create should be an array.');
            }

            Vent.implementOn(State);

            props.forEach(function(prop) {
                _enum.push(prop);

                Object.defineProperty(State, prop, {
                    configurable: false,
                    enumerable:   true,
                    writable:     true,
                    get:          function() {
                        return _state[prop] || null;
                    },
                    set:          function(val) {
                        var old = _state[prop];
                        _state[prop] = val;
                        this.publish('change', val, old);
                    },
                    value: initial_values[prop] || null
                });
            });

            State.forEach = function(callback, bind) {
                _enum.forEach(function(prop) {
                    callback.apply(bind, [prop, State[prop]]);
                }, bind);
            };

            State.copy = function() {
                return exp.fromObject(_state);
            };

            return State;
        },

        fromObject: function(obj) {
            return exp.create(Object.keys(obj), obj);
        }
    };

    return exp;
};

if(typeof define == 'function') {
    define(['event'], _module);
} else if(typeof module == 'object') {
    module.exports = _module(require('event'));
}
