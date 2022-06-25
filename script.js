window.onload = () =>{
animationHandler("tailsSprite", 2, 15); //Tails flying 
animationHandler("sonicSprite", 4, 15); //Sonic running
}



/**
 * Allows an html element to be animated using a spritesheet as it's background image.
 * @param {string} spriteName The id of the element to be animated
 * @param {number} maxFrames Set the number of frames in the animation
 * @param {number} animationSpeed Set the number of images per second
 * @param {number} loopPoint (Optional, default value is 0) Set a certain frame in the animation as the starting point of the animation loop
*/
function animationHandler(spriteName, maxFrames, animationSpeed, loopPoint = 0 ){

    const refreshRate = 1000 / animationSpeed;
    let sprite = document.getElementById(spriteName);
    let spriteFrame = 0;
    let spriteLength = sprite.offsetWidth;
    let frame = 0;

    if(loopPoint < 0){
        loopPoint = 0;
    };
    if(loopPoint >= maxFrames){
        loopPoint = maxFrames-1;
    };

    window.setInterval(() => {

        frame++;
        spriteFrame = spriteFrame - spriteLength;

    if (frame >= maxFrames ) {
        frame = loopPoint;
        spriteFrame = spriteLength * -loopPoint;
    }
    
    sprite.style.backgroundPositionX = spriteFrame + "px";
    
    }, refreshRate);
    
}

/*function tailsFlying(){
    var spriteFrame = [
    "0px",
    "-115px",
    ]

    const refreshRate = 1000 / 15;
    const maxFrames = 2;
    let sprite = document.getElementById('tailsSprite');
    let frameCount = 1;
    let frame = 0;

    window.setInterval(() => {
        frame = frame + frameCount;
    if (frame >= maxFrames ) {
        frame = 0;
    }
    
    sprite.style.backgroundPositionX = spriteFrame[frame];
    
    }, refreshRate);
}

function sonicRunning(){
    var spriteFrame = [
    "0px",
    "-145px",
    "-290px",
    "-435px",

    ]

    const refreshRate = 1000 / 15;
    const maxFrames = 4;
    let sprite = document.getElementById('sonicSprite');
    let frameCount = 1;
    let frame = 0;

    window.setInterval(() => {
        frame = frame + frameCount;
    if (frame >= maxFrames ) {
        frame = 0;
    }
    
    sprite.style.backgroundPositionX = spriteFrame[frame];
    
    }, refreshRate);
}*/