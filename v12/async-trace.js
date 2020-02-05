async function wait_1(x) {
 await wait_2(x);
}

async function wait_2(x) {
 await wait_3(x);
}

async function wait_3(x) {
 await x;

 throw new Error('Oh boi');
}

wait_1(1).catch(e => console.log(e.stack));
