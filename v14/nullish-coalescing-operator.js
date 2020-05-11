// https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_Coalescing_Operator
/**
 * nullish coalescing operator: ??
 * It is a logical operator.
 *  null or undefined 
 */

const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

const name = '' ?? 'David';
console.log(name);
// expected output: ''