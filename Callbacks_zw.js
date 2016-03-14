var Callbacks = function() {
    'use strict';
    var callbacks = [];

    function add(fn) {
        callbacks.push({
            fn: fn,
            enabled: true
        });
    }

    function remove(fn) {
        callbacks = callbacks.filter( function(callback) {
            return fn !== callback.fn;
        });
    }

    function enable(fn) {
        callbacks.filter( function(callback) {
            return fn === callback.fn;
        }).map( function(callback) {
            callback.enabled = true;
        });
    }

    function disable(fn) {
        callbacks.filter( function(callback) {
            return fn === callback.fn;
        }).map( function(callback) {
            callback.enabled = false;
        });
    }

    function fire(param) {
        callbacks.filter( function(callback) {
            return callback.enabled;
        }).map( function(callback) {
            callback.fn.apply(null, [param]);
        });
    }
    return {
        add: add,
        remove: remove,
        enable: enable,
        disable: disable,
        fire: fire
    }
};
