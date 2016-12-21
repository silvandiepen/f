
/*!
 * f.js v0.0.1 - A standalone AngularJS implementation to get a random number with a min and max value
 * Copyright (c) 2016 Sil van Diepen - http://github.com/silvandiepen/f
 * License: MIT
*/

(function(window, angular, undefined) {
  angular.module('f', [])
     .service('f', [function () {

    return {
	    random: function (min, max){
	      if(min.prop && min.prop.constructor === Array){
	        return min[random(0,min.length)];
	      } else {
	        min = min === null? MIN_INT : min;
	        max = max === null? MAX_INT : max;
	        var number = min + (max - min) * Math.random();
	        return Math.ceil(number);
	      }
	    },

	    contains: function contains(needle) {
			    // Per spec, the way to identify NaN is that it is not equal to itself
			    var findNaN = needle !== needle;
			    var indexOf;

			    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
			        indexOf = Array.prototype.indexOf;
			    } else {
			        indexOf = function(needle) {
			            var i = -1, index = -1;
			            for(i = 0; i < this.length; i++) {
			                var item = this[i];
			                if((findNaN && item !== item) || item === needle) {
			                    index = i;
			                    break;
			                }
			            }
			            return index;
			        };
			    }
			    return indexOf.call(this, needle) > -1;
			}
    };
	}]);
})(window, window.angular);
