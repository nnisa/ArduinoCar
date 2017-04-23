//https://learn.sparkfun.com/tutorials/using-the-bluesmirf/example-code-using-command-mode
//http://cdn.sparkfun.com/datasheets/Wireless/Bluetooth/bluetooth_cr_UG-v1.0r.pdf


'use strict';

const five = require('johnny-five');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

var serialport = require("serialport");
serialport.list(function(err, ports) {
    console.log(ports);

});

let led = null;

app.use(express.static(__dirname + '/'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
});


// five.Board({port: "/dev/tty.NodeBot-SPP"}).on('ready', function() {
  
    /**
   * Motor A: PWM 11, dir 12
   * Motor B: PWM 5, dir 4
   */

var speed, commands;
var motors;

var board = new five.Board({
  port: "/dev/cu.NodeBot-SPP",
  // port: "/dev/cu.usbmodemFD121",
  timeout: 100000
});

board.on("ready", function(){
  console.log('Arduino is ready.');
  commands = null;
  speed = 255; 
  
  motors = new five.Motors([
    { pins: { dir: 12, pwm: 11 }, invertPWM: true },
    { pins: { dir: 4, pwm: 5}, invertPWM: true }
  ]);
  board.repl.inject({
    motors: motors
  });
  
});

board.on("info", function(event) {
  console.log("%s sent an 'info' message: %s", event.class, event.message);
});


io.on('connection', function (socket) {
  console.log('I\'m IN!');
  socket.on('stop', function () {
    console.log("stop!");
    motors.stop();
  });

  socket.on('start', function () {
    console.log("Full speed ahead!");
    speed = 150;
    motors.forward(speed);
  });

  socket.on('reverse', function () {
    console.log("Now backwards!");
    speed = 120;
    motors.reverse(speed);
  });

  socket.on('left', function () {
    console.log("To the left!");
    var aSpeed = 220;
    var bSpeed = 100;
    motors[0].reverse(bSpeed);
    motors[1].forward(aSpeed);
    // motors.a.fwd(aSpeed);
    // motors.b.rev(bSpeed);
  });

  socket.on('right', function () {
    console.log("To the right!");
    var aSpeed = 100;
    var bSpeed = 220;
    motors[0].forward(bSpeed);
    motors[1].reverse(aSpeed);
    // motors.a.rev(aSpeed);
    // motors.b.fwd(bSpeed);
  });
});

// });



server.listen(port);
console.log(`Server listening on http://localhost:${port}`);