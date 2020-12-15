let robot;

function setup() {
  createCanvas(800, 800);
  robot = new Robot();
}

function draw() {
  background(220);
  //robot.rotate(1);
  if (!mouseIsPressed) {
    robot.update();
  }
  robot.move(100, 100);
  robot.show();
}

function mouseIsPressed() {
  print("Hold");
}
