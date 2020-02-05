const workers = require('worker_threads');

if (workers.isMainThread) {
  const worker = new workers.Worker(__filename, {
    workerData: 41
  });
  worker.on('message', (response) => {
    console.log(response);
  });
} else {
  workers.parentPort.postMessage(workers.workerData + 1 )
}