$(document).ready(function () {
  namespace = '/test';
  var socket = io.connect('http://' + document.domain + ':' + location.port + namespace);

  socket.on('my response', function (msg) {
    console.log('recv' + msg);
    $('#log').append('<br>Received: ' + msg.data);
  });
  // event handler for server sent data
  // the data is displayed in the "Received" section of the page
  // handlers for the different forms in the page
  // these send data to the server in a variety of ways
  $('form#startcounter').submit(function (event) {
    socket.emit('startcounter', {data: "start"});
    return false;
  });
  $('form#stopcounter').submit(function (event) {
    socket.emit('stopcounter', {data: "stop"});
    return false;
  });
});
