class Robot {
  //Størrelsesforhold
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.robotWidth = 40;
    this.robotHeight = 40;
    this.angle = 0;
  }

  setRobot(setX, setY) {
    this.x = setX;
    this.x = setY;
  }

  getRobot() {
    return this.robotX, this.robotY;
  }

  getColor() {
    return get(this.robotX, this.robotY);
  }

  move(leftWheel, rightWheel) {
    //values between 0 - 100;
    this.angle += (leftWheel + rightWheel * -1) * 0.001;
    print(this.angle);
  }

  rotate(angle) {
    angleMode(DEGREES);
    this.angle += angle;
  }

  update() {
    this.y = this.y + sin(this.angle) * 1;
    this.x = this.x + cos(this.angle) * 1;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rectMode(CENTER);
    if (mouseIsPressed) {
      fill(255);
      rect(0, 0, this.robotWidth * 1.2, this.robotHeight * 1.2);
      fill(0);
      rect(
        0,
        0 - (this.robotHeight / 3) * 1.2,
        this.robotWidth * 1.2,
        (this.robotHeight / 3) * 1.2
      );
    } else {
      fill(255);
      rect(0, 0, this.robotWidth, this.robotHeight);
      fill(0);
      rect(0, 0 - this.robotHeight / 3, this.robotWidth, this.robotHeight / 3);
    }
    pop();
  }
}
