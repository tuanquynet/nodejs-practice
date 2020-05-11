// Put a func into microtask queue
function doQueuedMicrotask() {
  console.log('doQueueMicrotask');
}

// setTimeout is lower priority
// run #4rd
setTimeout(() => console.log("timeout"));

// as same priority as promise, but it place before promise
// run #2nd
queueMicrotask(doQueuedMicrotask)

// run #3rd
Promise.resolve()
  .then(() => console.log("promise is micro task as well"));

// #1st
console.log('finished');
