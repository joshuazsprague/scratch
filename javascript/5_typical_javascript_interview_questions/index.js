

/**
 * question 1 - scope
 */
(function() {
  //'use strict'
  // ReferenceError: b is not defined
  
  var a = b = 5;
  
})();

//console.log(a);
// a is not definied (not in scope)

console.log(b);
// b = 5

/*
The trick of this question is that in the IIFE there are two assignments but the variable a is declared using the keyword var. What this means is that a is a local variable of the function. On the contrary, b is assigned to the global scope.
*/




/**
 * question 2 - create "native" methods
 */
String.prototype.repeatify = String.prototype.repeatify || function(times) {
   var str = '';

   for (var i = 0; i < times; i++) {
      str += this;
   }

   return str;
};

//
console.log('hello'.repeatify(3));

String.prototype.repeatify = String.prototype.repeatify || function(times) {/* code here */};
//This technique is particularly useful when you are asked to shim a JavaScript function.

/*
The question tests the knowledge of the developer about inheritance in JavaScript and the prototype property. It also verifies that the developer is able to extend native data type functionalities (although this should not be done).

Another important point here is to demonstrate that you are aware about how to not override possible already defined functions. This is done by testing that the function didn’t exist before defining your own:
*/


/**
 * question 3 - hoisting
 */
function test() {
   console.log(a);
  console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

/*
The reason is that both variables and functions are hoisted (moved at the top of the function) but variables don’t retain any assigned value. So, at the time the variable a is printed, it exists in the function (it’s declared) but it’s still undefined. Stated in other words, the code above is equivalent to the following:
*/




/*
 * question 4 - how this works in javascript
 */
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

/*
The code prints Aurelio De Rosa and John Doe. The reason is that the context of a function, what is referred with the this keyword, in JavaScript depends on how a function is invoked, not how it’s defined.

In the first console.log() call, getFullname() is invoked as a function of the obj.prop object. So, the context refers to the latter and the function returns the fullname property of this object. On the contrary, when getFullname() is assigned to the test variable, the context refers to the global object (window). This happens because test is implicitly set as a property of the global object. For this reason, the function returns the value of a property called fullname of window, which in this case is the one the code set in the first line of the snippet.
*/


/*
 * question 5 - call() and apply()
 */

/*
Fix the previous question’s issue so that the last console.log() prints Aurelio De Rosa.

Answer
The issue can be fixed by forcing the context of the function using either the call() or the apply() function. If you don’t know them and their difference, I suggest you to read the article What’s the difference between function.call and function.apply?. In the code below I’ll use call() but in this case apply() would produce the same result:

console.log(test.call(obj.prop));
*/
