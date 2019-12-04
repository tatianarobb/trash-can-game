//create an empty array called balls
//let balls = [];

//create a variable to hold your avatar
let me;
let ball;
let can;

function setup() {
  createCanvas(500, 400);


  //make one avatar called me

  me = new Avatar(width/8, 300, 3);
  can = new trashcan(450, 300);



  ball = new Ball (me.x+20, me.y+30,2,false);

}

 function draw(){
 	background(220);
  // trashcan(450, 300);

   me.drawMe();
   me.moveMe();
   can.drawtrashcan();
   ball.drawBall();
   ball.moveBall();
 }




function keyPressed(){
  if (keyCode===ENTER){
    ball.thrown = true;
  }

}
class trashcan {
  constructor(x, y){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
   }

drawtrashcan(){
//x=150 y=150
  rect(this.x, this.y, 40, 60);
  rect(this.x-5, this.y, 50, 10);
  fill("red")
  line(this.x+5, this.y+60, this.x+5, this.y+10);
  fill("black")
  line(this.x+10, this.y+60, this.x+10, this.y+10);
  line(this.x+15, this.y+60, this.x+15, this.y+10);
  line(this.x+20, this.y+60, this.x+20, this.y+10);
  line(this.x+25, this.y+60, this.x+25, this.y+10);
  line(this.x+30, this.y+60, this.x+30, this.y+10);
  line(this.x+35, this.y+60, this.x+35, this.y+10);

   }
}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,40,40);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
    this.y += this.speed;
}
if (keyIsDown(LEFT_ARROW)){
  this.x += this.speed;
	}
if(keyIsDown(RIGHT_ARROW)){
this.x -= this.speed;
  }

}
}

//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed,thrown){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.thrown = thrown;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    fill("white")
      stroke(0);
      strokeWeight(1);
    	 var RGBColor = (Math.round, Math.random, 255);
		  ellipse(this.x,this.y,25,25);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
    if(this.thrown == true){
      this.x = this.x+ this.speed;
      if (this.x<=me.x+200) {
        this.y=this.y-2}
        else{
          this.y=this.y+5}
        }
      }
    //  this.y = this.y -(1/200*(this.x-20)^2 +25);
      // this.y+.5;
}
