var five = require("johnny-five");
var board = new five.Board({ port: "/dev/tty.usbmodemFA131" });

var distance;
var distanceLeft;
var distanceRight;

board.on("ready", function() {

  //servo initialized
  var servo = new five.Servo({
    pin: 10,
  	center: true
  });

  //distance sensor initialized
  var proximity = new five.Proximity({
    controller: "HC-SR04",
    pin: 7
  });
  proximity.on("data", function() {
    distance = this.in;

    console.log("Proximity: ");
    console.log("  cm  : ", this.cm);
    console.log("  in  : ", this.in);
    console.log("-----------------");
  });


   if (distance <= 4){
   	servo.to( 90 );
   	step: 1
   	distanceLeft = this.in;

   	servo.to( 0 );
   	step: 1
   	distanceRight = this.in;
   }
	
	if (distanceLeft > distanceRight){
		console.log("Go left!");
  	} else {
  		console.log("Go right!");
  	}












// servo.to( 180 );
// servo.to( 90 );
// servo.to( 0 );
// servo.center();
//////////////////////////////////////
  // var lap = 0;

  // servo.sweep().on("sweep:full", function() {

  //   console.log("lap", ++lap);

	

    // if (lap === 1) {
    //   this.sweep({
    //     range: [40, 140],
    //     step: 10
    //   });
    // }

    // if (lap === 2) {
    //   this.sweep({
    //     range: [60, 120],
    //     step: 5
    //   });
    // }

    // if (lap === 3) {
    //   this.sweep({
    //     range: [80, 100],
    //     step: 1
    //   });
    // }

    // if (lap === 5) {
    //   process.exit(0);
    // }
 // });

  // proximity.on("change", function() {
  //   console.log("---");
  // });
});
