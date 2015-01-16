(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports = extendy;
    else
        global.extendy = extendy;
    
    function extendy(to, from) {
        check(to, from);
        
        Object.keys(to).forEach(function(name) {
            from[name] = to[name];
        });
    }
    
    function check(to, from) {
        var empty = 'could not be empty!';
        
        if (!to)
            throw(Error('to ' + empty));
        
        if (!from)
            throw(Error('from ' + empty));
    }
    
})(this);