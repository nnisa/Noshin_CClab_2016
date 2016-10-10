
int buttonPin =7;
int ledPin = 13; 
boolean on=false;
int buttonState=0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  buttonState = digitalRead(buttonPin);
  if (buttonState == HIGH){
    Serial.print(buttonState);
    if (on==true){
      on=false;
    }
    else{
      on =true; 
    }
  }

  if (on==true){
    digitalWrite(ledPin, HIGH);
    }
    else {
      digitalWrite(ledPin, LOW);
      }
}
