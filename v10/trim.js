#! /usr/bin/env node

const string = '  Let\'s play with fun!  ';

console.log('^' + string.trimStart() + '$');
console.log('^' + string.trimEnd() + '$');
console.log('^' + string.trim() + '$');