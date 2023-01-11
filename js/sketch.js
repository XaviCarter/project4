//variables
var barrel1;
var fillValue = '#F9F108';
var circleX, circleY, circleRad;
var openDoor = false;

let door1Y = 50;
let door2Y = 600;



function setup() {
    var canvas = createCanvas(1600, 1200);
    canvas.parent("p5container");

    initCircle();



    
}

function draw() {
    background('#F9F108');

    //changes colur of circle when hovered over to create 'highlight effect'
    if(mouseX > (circleX - circleRad/2)
      && mouseX < (circleX + circleRad/2)
      && mouseY > (circleY - circleRad/2)
      && mouseY < (circleY + circleRad/2)
    ) {
        fillValue = '#BCC004';
    } else {
        fillValue = '#F9F108';
    }

    

    if(openDoor==true) {
        for (let door1Y = 50; door1Y > -550; door1Y++) {
        }
        for (let door2Y = 600; door2Y < 1150; door2Y--) {

        }
       
        

        }

        
    }

    

    //outline
    fill('#F9F108');
    rect(0, 0, 50, 1200);

    fill('#F9F108');
    rect(1550, 0, 50, 1200);

    fill('#F9F108');
    rect(0, 0, 1600, 50);

    fill('#F9F108');
    rect(0, 1150, 1600, 50);

    //doors
    fill('#F9F108')
    rect(50, door1Y, 1600, 550)

    fill('#F9F108')
    rect(50, door2Y, 1600, 550)
    
    //radiation symbol
    fill(0);
    ellipse(800, 600, 250);
    
    fill('#F9F108');
    ellipse(800, 600, 200);

//triangles around middle
    fill(0);
    triangle(800, 600, 750, 699, 850, 699)

    fill(0);
    triangle(800, 600, 693, 600, 730, 510)

    fill(0);
    triangle(800, 600, 907, 600, 870, 510)

//outline of button circle    
    fill(0, 0, 0);
    ellipse(800,600, 60);
  
//button circle
    fill(fillValue);
    stroke(0);
    strokeWeight(6);
    ellipse(width/2,height/2,50);
}
//sets circle button parameters
function initCircle() {
    circleX = width/2;
    circleY = height/2;
    circleRad = 50;
}

//sets open door variable to true when clicked
function mousePressed() {
    if(mouseX > (circleX - circleRad/2)
    && mouseX < (circleX + circleRad/2) 
    && mouseY > (circleY - circleRad/2) 
    && mouseY < (circleY + circleRad/2) 


    ) {
   openDoor = true; 
  }  else {
   openDoor = false; 
  }

}

