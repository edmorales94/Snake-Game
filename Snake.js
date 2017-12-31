window.onload = fuction(){
    canvas = document.getElementById("gc");
    context = canvas.getContext("2d");
    document.addEventListener("keydown", keypush);
    setInterval(game, 1000/15);
}
playerX = 10;
playerY = 10;
gridSize = 20;
tileCount = 20;
appleX = 15;
appleY = 15;
xVelocity = 0;
yVelocity = 0;
trail = [];
tail = 5;

function game(){
    playerX += xVelocity;
    playerY += yVelocity;
    if(playerX < 0){
        playerX = tileCount - 1;
    }
    if(playerX > tileCount -1){
        playerX = 0;
    }
    if(playerY < 0){
        playerY = tileCount - 1;
    }
    if(playerY > tileCount -1){
        playerY = 0;
    }
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width, canvas.height);

    context.fillStyle = "lime";
    for(var i = 0; i < trail.length; i++){
        context.fillRect(trail[i].x*gridSize, trail.y*gridSize,gridSize-2, gridSize-2);
        if(trail[i].x == playerX && trail[i].y == playerY){
            tail = 5;
        }
    }

    trail.push({x:playerX, y: playerX})
    while(trail.length > tail){
        trail.shift();
    }

     if(appleX == playerX && appleY == playerY){
            tail++;
            appleX = Math.floor(Math.random()*tileCount);
            appleY = Math.floor((Math.random() * tileCount))
        }


    context.fillStyle = "red";
    context.fillRect(appleX*gridSize, appleY*gridSize,gridSize-2, gridSize-2);
}

function keypush(event) {
    switch(event.keyCode){
        case 37:
            xVelocity = -1;
            yVelocity = 0;
            break;
        case 38:
            xVelocity = 0;
            yVelocity = -1;
            break;
        case 39:
            xVelocity = 1;
            yVelocity = 0;
            break;
        case 40:
            xVelocity = 0;
            yVelocity = 1;
            break;
    }
}