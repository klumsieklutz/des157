//Douagee Cheng 2017 Practice 
// This sketch is to draw an ellipse
// will follow the cursor and changes color. 

void setup(){
   size(800,250);
   background(255);
}

void draw(){
  if(mousePressed){
    fill(0);
}
  else{fill(255);
  }
  ellipse(mouseX, mouseY, 50, 50); 
}