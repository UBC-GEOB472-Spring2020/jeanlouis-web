function setup() {

  createCanvas(1000, 1000);
}

function draw() {
  var x = 500
  var y = 0
  
  background(250); 
  line(300+x,50+y,25+x, 100+y)
  line(20+x,350+y, 25+x, 100+y)
  line(20+x, 350+y, 300+x, 300+y)
  line(300+x, 300+y, 400+x,375+y);
  line( 400+x, 375+y, 300+x, 50+y)
  stroke(100)
  
  fill(225, 0, 0)
  ellipse(100+x,150+y,50)
  ellipse(275+x, 250+y, 100)
  
}