/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
Syntax
  obj?.prop
  obj?.[expr]
  arr?.[index]
  func?.(args)
  
Operator: ?.
 */
const book = {
  name: 'Right way to do',
  author: null,
}

let authorName = book.author?.name
console.log('authorName ', authorName);
console.log('dob of author ', book.author?.['dob']);

// set author now
book.author = {
  name: 'james'
}
authorName = book.author?.name

console.log('authorName ', authorName);
const price = book.getPrice?.()
console.log('non existing method ', price);