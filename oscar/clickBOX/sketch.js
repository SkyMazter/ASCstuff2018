function setup(){
    createCanvas(600,600);
    
}
let color = "blue"
function draw(){
    fill(color);
    rect(0,0,600,600);
}

function mouseClicked(){
    if (color == "blue"){
        color = "red"
    }
    else{
        color = "blue"
    }
}
