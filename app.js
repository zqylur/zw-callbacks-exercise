var testCallbacks = function() {
    // The $.Callbacks() function is internally used to provide the base functionality behind a lot of the jQuery components.
    // $.Callbacks() supports a number of methods including
    // callbacks.add()
    // callbacks.remove()
    // callbacks.fire()
    // callbacks.disable()

    //Expected results
    var callbacks = new Callbacks();

    function fn1(value) {
        console.log(value);
        return false;
    }

    function fn2(value) {
        fn1('fn2 says: ' + value);
        return false;
    }

    function fn3(value) {
        fn2('fn3 passes in: ' + value);
    }

    function fn4(value) {
        fn1('fn4 now says: ' + value);
    }

    callbacks.add(fn1);
    callbacks.fire('foo!'); // Outputs: foo!

    callbacks.add(fn2);
    callbacks.fire('bar!'); // Outputs: bar!, fn2 says: bar!

    callbacks.remove(fn2);
    callbacks.fire('foobar'); // Only outputs foobar, as fn2 has been removed.
    callbacks.fire('foobar2'); // Only outputs foobar2, as fn2 has been removed.

    callbacks.disable(fn1);
    callbacks.fire('DO NOT PRINT THIS'); // No output as fn1 has been disabled.

    callbacks.enable(fn1);
    callbacks.fire('foobar3'); // Output foobar3 as fn1 has been enabled

    callbacks.add(fn2);
    callbacks.add(fn3);
    callbacks.add(fn4);

    callbacks.fire('fb');
    callbacks.disable(fn4);
    callbacks.fire('fn 1-3');
    callbacks.disable(fn3);
    callbacks.fire('foo!');

    callbacks.enable(fn4);
    callbacks.fire('woot');

    callbacks.remove(fn1);
    callbacks.remove(fn2);
    callbacks.remove(fn3);
    callbacks.remove(fn4);

    callbacks.fire('empty times now');

};
