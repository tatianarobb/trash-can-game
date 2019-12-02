//create an empty array called balls
//let balls = [];

//create a variable to hold your avatar
let me;

function setup() {
  createCanvas(500, 400);


  //make one avatar called me
  me = new Avatar(width/2, 300, 3);
  can = new trashcan(450, 300);

}

 function draw(){
 	background(220);
  // trashcan(450, 300);

   me.drawMe();
   me.moveMe();
   can.drawtrashcan();

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
	}

  die(){

  }

}
