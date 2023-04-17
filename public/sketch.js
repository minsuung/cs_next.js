/**
 * Bouncing Ball with Vectors 
 * 
 * Demonstration of using vectors to control motion 
 * of a body.
 */
 
let location1;  // location1 of shape
let velocity1;  // velocity1 of shape
let gravity1;   // gravity11 acts at the shape's acceleration

let location2;
let velocity2;
let gravity2;
  
function setup() {
  createCanvas(640,360);
  location1 = createVector(100,100);
  velocity1 = createVector(1.5,2.1);
  gravity1 = createVector(0,0.2);
  
  location2 = createVector(200,200);
  velocity2 = createVector(2.5,3.5);
  gravity2 = createVector(0,0.5);
    
}

function draw() {
  background(200,0,0);
  
  // Add velocity1 to the location1.
  location1.add(velocity1);
  // Add gravity11 to velocity1
  velocity1.add(gravity1);
  
  location2.add(velocity2);
  velocity2.add(gravity2);
  
  // Bounce off edges
  if ((location1.x > width) || (location1.x < 0)) {
    velocity1.x = velocity1.x * -1;
  }
  
  if (location1.y > height) {
    // We're reducing velocity1 ever so slightly 
    // when it hits the bottom of the window
    velocity1.y = velocity1.y * -0.95; 
    location1.y = height;
  }
  
  if ((location2.x > width) || (location2.x < 0)) {
    velocity2.x = velocity2.x * -1;
  }
  
  if (location2.y > height) {
    velocity2.y = velocity2.y * -0.99; 
    location2.y = height;
  }

  // Display circle at location1 vector
  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(location1.x,location1.y,48,48);
  
  stroke(0,0,255);
  strokeWeight(5);
  fill(0,255,0);
  ellipse(location2.x,location2.y,80,80);
}
