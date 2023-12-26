
let row = canvas.width/scale
// console.log(row);

let snake=[]
snake[0]={
    x:(Math.floor(Math.random()*column )) *scale,
    y:(Math.floor(Math.random()*row)) *scale,
}

let food={
    x:(Math.floor(Math.random()*column )) *scale,
    y:(Math.floor(Math.random()*row)) *scale,
}


document.onkeydown = direction;
let d = "right"

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "right"){
        d = "left";
    }else if(key == 38 && d != "down"){
        d = "up";
    }else if(key == 39 && d != "left"){
        d = "right";
    }else if(key == 40 && d != "up"){
        d = "down";
    }
}

let playgame= setInterval(draw,100)



function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height )  

    for (let i = 0; i < snake.length; i++) {

        ctx.fillStyle="white"
        ctx.fillRect(snake[i].x,snake[i].y,scale,scale)
        ctx.strokeStyle="red"
        ctx.strokeRect(snake[i].x,snake[i].y,scale,scale)
    

    }
    ctx.fillStyle="yellow"
    ctx.fillRect(food.x, food.y, scale, scale)
    ctx.strokeStyle="red"
    ctx.strokeRect(food.x, food.y, scale, scale)
   
   

let snakex= snake[0].x
let snakey= snake[0].y
console.log(snakey);


if(snakex > canvas.width) {
    snakex=0;
}
if(snakey > canvas.height) {
    snakey=0;
}
if(snakex < 0) {
    snakex=canvas.width ;
}
if(snakey < 0) {
    snakey=canvas.height;
}



if(d=="left") snakex-=scale;
if(d=="right") snakex+=scale;
if(d=="up") snakey-=scale;
if(d=="down") snakey+=scale;

let newHead={
    x:snakex,
    y:snakey
}

if (eatself(newHead, snake)) {
    clearInterval(playgame)
}


if (snakex==food.x && snakey==food.y) {
    food={
        x:(Math.floor(Math.random()*column )) *scale,
        y:(Math.floor(Math.random()*row)) *scale,
    }
    
}else{
    snake.pop()
}

snake.unshift(newHead)

  }

  function eatself(head, array) {
    for (let i = 0; i < array.length; i++) {
    if (head.x==array [i].x && head.y===array [i].y) {
        return true
    }
        
    }
    return false 
    }
    
  const canvas =document.querySelector("canvas")
// console.log(canvas);
const ctx = canvas.getContext("2d")
// console.log(ctx);

let scale= 20
let column = canvas.height/scale