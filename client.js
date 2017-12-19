
const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);
}

socket.on('disconnect', (reason) => console.log('disconnect', reason));
socket.on('reconnecting', (attemptNumber) => console.log('reconnecting', attemptNumber));
socket.on('reconnect', (attemptNumber) => console.log('reconnect', attemptNumber));
socket.on('reconnect_error', (error) => console.log('reconnect_error', error));

setTimeout(() => {
  console.log('explicitly connecting');
  socket.connect();
}, 10 * 1000);
