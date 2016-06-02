'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app')
  .filter('moedaReal', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input) {

    var output;
    var n = parseFloat(input);
    var sep = sep || ","; // Default to period as decimal separator
    var decimals = decimals || 2; // Default to 2 decimals

    if(!n)
      return n

    return n.toLocaleString().split(sep)[0]
        + sep
        + n.toFixed(decimals).split( '.')[1];
        
    // Do filter work here



  }
});
app
.filter("asDate", function () {
    return function (input) {
        return new Date(input);
    }
});

app
.filter('moedaRealSemDecimal', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input) {

    var output;

    var n = input;
    var sep = sep || ","; // Default to period as decimal separator
    var decimals = decimals || 2; // Default to 2 decimals

    if(!n)
      return n
    return n.toLocaleString().split(sep)[0]
        
    // Do filter work here

    var tmp = input+'';
      tmp =  tmp.replace(/[\D]+/g,'');
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        if( tmp.length > 10 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;

    return output;

  }
});

