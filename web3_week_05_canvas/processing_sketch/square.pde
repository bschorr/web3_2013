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

