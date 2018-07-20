function setup(){
    createCanvas(600,600);
}
let colors =["red","green","blue"];
let index = 0

function mouseClicked(){

    if(index == 0 ){
        index = 1
    }
    else{
        index = 0
    }
}
function draw(){
    fill(colors[index]);
    rect(0,0,300,600);
    fill(colors[index + 1]);
    rect(300,0,300,600);
}