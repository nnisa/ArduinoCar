//http://cdn.sparkfun.com/datasheets/Wireless/Bluetooth/bluetooth_cr_UG-v1.0r.pdf
//$$$ enter the command mode 
//S(commandKey) in command mode means SET 
//SU,<value> is setting the baud rate 
//SU D: would give details of the bluetooth (setings)
// --- command means exit the configuration mode
//SN means naming the bluetooth 
//SP was to set the pin number 

#define ROBOT_NAME "NodeBot"

//Baud rate for bluetooth
 #define Current_BLUETOOTH_SPEED 57600

#include <SoftwareSerial.h>

// Swap RX/TX connections on bluetooth chip
//   Pin 10 --> Bluetooth TX
//   Pin 11 --> Bluetooth RX
SoftwareSerial bluetooth(2, 3); // RX, TX


void setup()
{
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }
  Serial.println("Starting config");
  bluetooth.begin(Current_BLUETOOTH_SPEED);
  delay(1000);

  bluetooth.print("$");  // Print three times individually
  bluetooth.print("$");
  bluetooth.print("$");  // Enter command mode
}

void loop()
{
  if(bluetooth.available())  // If the bluetooth sent any characters
  {
    // Send any characters the bluetooth prints to the serial monitor
    Serial.print((char)bluetooth.read());  
  }
  if(Serial.available())  // If stuff was typed in the serial monitor
  {
    // Send any characters the Serial monitor prints to the bluetooth
    bluetooth.print((char)Serial.read());
  }
  // and loop forever and ever!
}
