var five = require("johnny-five");
var board = new five.Board({ port: "/dev/tty.usbmodem22" });

var distance;
var distanceLeft;
var distanceRight;


var servo;

board.on("ready", function() {

  //servo initialized
  servo = new five.Servo({
    pin: 10,
    // startAt: 90
  });

  // Create an animation segment object


  //distance sensor initialized
 //  var proximity = new five.Proximity({
 //    controller: "HC-SR04",
 //    pin: 7
 //  });
 //  proximity.on("data", function() {
 //    distance = this.in;

 //    console.log("Proximity: ");
 //    console.log("  cm  : ", this.cm);
 //    console.log("  in  : ", this.in);
 //    console.log("-----------------");
 //  });


 //   if (distance <= 4){
 //   	servo.to( 90 );
 //   	step: 1
 //   	distanceLeft = this.in;

 //   	servo.to( 0 );
 //   	step: 1
 //   	distanceRight = this.in;
 //   }
	
	// if (distanceLeft > distanceRight){
	// 	console.log("Go left!");
 //  	} else {
 //  		console.log("Go right!");
 //  	}



// servo.to(180)
// setTimeout(function() {
//   console.log("servo.to(0)");
//   servo.to(0)
// }, 5000);
// setTimeout(function() {
//   console.log("servo.to(90)");
//   servo.to(90)
// }, 10000);

//////////////////////////////////////
 //  var lap = 0;

 //  servo.sweep().on("sweep:full", function() {

 //    console.log("lap", ++lap);

	

 //    if (lap === 1) {
 //      this.sweep({
 //        range: [40, 140],
 //        step: 10
 //      });
 //    }

 //    if (lap === 2) {
 //      this.sweep({
 //        range: [60, 120],
 //        step: 5
 //      });
 //    }

 //    if (lap === 3) {
 //      this.sweep({
 //        range: [80, 100],
 //        step: 1
 //      });
 //    }

 //    if (lap === 5) {
 //      process.exit(0);
 //    }
 // });

  // proximity.on("change", function() {
  //   console.log("---");
  // });
});




// // nested
// servo.to(180)
// setTimeout(function() {
//   servo.to(0)
//   setTimeout(function() {
//     servo.to(90)
//   }, 5000);
// }, 5000);

// servo.to(180)
// setTimeout(function() {
//   servo.to(0)
// }, 5000);
// setTimeout(function() {
//   servo.to(90)
// }, 10000);