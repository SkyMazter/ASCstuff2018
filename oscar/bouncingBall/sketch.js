function setup(){
    createCanvas(600,600);
}

let x = 150;
let y = 300;
let xDirect = 1;
let yDirect = 1;

function draw(){
    background(100);

    fill("red");
    ellipse(x,y,300);
    x = x + xDirect
    if(x < 150){
        xDirect = 1
    }
    else if( x > 450){
        xDirect = -1
    }

}