



//object Oriented Collision
var bubbles = [];
var numBubbles = 25;
var doger;
var stop = 0;
var seconds =0;

















//-------Preload function-------///

function preload() {

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
  
turtle = loadAnimation("turtle_1.png","turtle_up.png");

shark = loadAnimation("shark_1.png","shark_2.png");




}










//-------------setup function--------//

function setup() {
	createCanvas(windowWidth,windowHeight);
	



	for(i=0;i<numBubbles;i++){
		r = new Bubble(random(windowWidth),random(windowHeight)+100, 0,0 )
		//create a new shark at a random with and a random height below 100px
		bubbles.push(r);
	 //add sharks to the array
		
	}

	doger = new dogerObj();//create the doding trutle object
	console.log('setup_working');




	
}

//click to restart
function mouseClicked(){

	window.location.reload();

}

	




//----------------DRAW Function-------------------//

function draw(){
	background('#5fc2f9');
	textStyle(BOLD);
	textSize(20);
	text("The Deep Blue Sea Game",windowWidth/2-100,50);//Display the title of the game


	//time alive
	var s = seconds/1000;
	textStyle(NORMAL);
	textSize(14);
	text("Time Alive: " + parseInt(s/3.53) + " seconds", 325, 50);


		//Second counter
		for(s=0;s<59;s++){
			seconds++;
		}






	

if(stop<=1){

	//run game

	for(i=0;i<numBubbles;i++){
		bubbles[i].display();
		bubbles[i].poke();
		//bubbles[i].collide( doger );
		//collide against the circle object

	}


}

else{

	//Tell the user to restart the game and notify end of game

	for(i=0;i<numBubbles;i++){


		textSize(15);
		textStyle(NORMAL)
		text("Your turtle was eaten! Click anywhere to restart the game.",windowWidth/2-200,windowHeight/2);
		turtle.splice();
		


	}


}



	
	doger.display(mouseX,mouseY);

	//doger.move();
 //pass the x,y pos in to the circle.


	

}

//---------------BUBBLE OBJECT---------------//


function Bubble(x,y,size){
	this.x = x
	this.y = y
	this.size = 60;
	this.color = 'red';
	this.hit = false;





	this.display = function(){
		noStroke();
		fill(this.color);
		this.x += 9 //move to the right!


		if(this.x > width){ //loop to the left!
			this.x = - this.size;
		}
		animation(shark,this.x,this.y);
		//ellipse(this.x,this.y,this.size,this.size);


	}

	//Does the trutle get hit by the sharks mouth

	this.poke = function(){

		//check if the mouse is within the bounds of the bubble

		if( mouseX > (this.x-this.size/2) && 
			mouseX < (this.x+this.size/2) &&
			mouseY > (this.y-this.size/2) &&
			mouseY < (this.y+this.size/2)){

			//stop the game, your turtle was eaten
			stop += 1;


			}

		else{
			return false;
		}

	}




}

//---------------Turtle OBJECT---------------//


function dogerObj(size){
	this.size = 35;
	this.color = color(random(255),random(255),random(255))
	this.x = windowWidth/2;
	this.y = windowHeight/2;

	
	this.display = function(x,y,size){
		this.x = windowWidth/2;
		this.y = windowHeight/2;
		noStroke();
		fill(this.color);
		animation(turtle, mouseX,mouseY);
		//ellipse(mouseX,mouseY,this.size,this.size);
	}



	/*this.move = function(x,y,size){

		if (keyIsPressed === UP_ARROW) {
			this.y = this.y + 5;
			console.log('up_key_pressed')
		}
		else if(keyIsPressed === DOWN_ARROW){

			this.y = this.y - 5;
		}
		



	}*/

	


	
}



