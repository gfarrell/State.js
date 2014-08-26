/* global jasmine, require, beforeEach, define, describe, it, expect */
define(['jasmine/boot', 'state'], function() {
    'use strict';

    describe('State.js', function() {
        var State = require('state');

        it('creates state objects from a list of keys', function() {
            var s = State.create(['hello', 'goodbye']);
            expect(s.hello).toBeNull();
            expect(s.goodbye).toBeNull();
            expect(s.noprop).toBeUndefined();
        });
    });
});
