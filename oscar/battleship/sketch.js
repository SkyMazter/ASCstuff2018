let x = 0;
let y = 0;
let w = 100;
let h = 100;

function setup(){
    createCanvas(1010,1010);
    for (let i = 1; i < 101; i ++){
        fill("blue");
        rect(x,y,w,h);
        if(i % 10 == 0){
            y = y + h;
            x = 0
        }
        else{
            x = x + w
        }
    }
}

let ships = [
[1,0,0,0,0,0,0,0,0,1],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,0,1],
]
let xPos = floor(mouseX / w)
let yPos = floor(mouseY / h)
let result = ships[xPos][yPos]
function mouseClicked(){
    if(result == 1){
        fill("red")
        xPos = xPos * 100;
        yPos = yPos * 100;
        rect(xPos,yPos,100,100);
    }

}

