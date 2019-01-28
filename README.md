# A set of a few JS6 tasks

## Description

1. Transformation of the ES2015 code into ES6 code.

2. Palindrome. A function which checks if the given word/number/phrase is a palindrome.

3. A function which checks if the given word exists in the array.

4. In this task presented 2 functions.
 costOfProductForQtyGreaterThan() finds products in the array where quantity is greater than a given number and returns total cost of such products. 
 costOfProduct() finds a product by the given name and returns total cost of this product.
 
5. Task where the mistake was found and fixed. The problem was in "this" inside the callback of .map method. Since it is already another function, "this" refers to the callback function and not to the "team" object.

## About usage of the Vue Devtools (on Chrome browser) in production mode

It can be enabled by adding to the main.js file the following line: 
```
Vue.config.devtools = true
```
This can be achieved also by installing the vue-remote-devtools package (https://github.com/vuejs/vue-devtools).