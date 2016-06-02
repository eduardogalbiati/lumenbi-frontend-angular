'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app')
 .filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        if (input) {
        	return input.slice(start);
        }
    }
});