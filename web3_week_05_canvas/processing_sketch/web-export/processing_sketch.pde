Square[] squares = new Square[0];
int counter;
int trueCounter;

void setup () {
  size (1280, 720);
  rectMode(CENTER);
  noStroke();
  counter = 0;
  trueCounter = 0;
  //angle = 0;
  
  for (int i = 0; i < 15; i+=1) {
   
    Square tempSquare = new Square(i*100, color ( i * 12 ));
    squares = (Square[])append(squares, tempSquare);
    
  }

}

void draw () {
  
  translate (width/2, height/2);
  
  for (int i = squares.length-1; i >0 ; i--) {
  
  if ( trueCounter == i ) squares[i].trigger = true;
  squares[i].update();
  squares[i].draw();
  //print (i);
  
  }
  
  counter+=2;
  if (counter%30 == 0) trueCounter++;
  if (trueCounter > squares.length) {
    trueCounter = 0;
    counter = 0;
  }
}





class Square {
  
  float angle;
  float size;
  color myColor;
  boolean trigger;

  Square(float _size, color _myColor) {
    
    size = _size;
    angle = 0;
    myColor = _myColor;
    trigger = false;
    
  }
  
  void update () {
    
    if (trigger) angle+= 1;
    if ( angle >= 90 ) {
    
      angle = 0;
      trigger = false;
    
    }
    
  }
  
  void draw () {
    
    pushMatrix();
    
    fill (myColor);
    rotate (radians (angle));
    rect (0, 0, size, size);
    
    popMatrix ();
    
  }
  
}


