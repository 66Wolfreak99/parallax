window.onload = () =>{
    tailsFlying();
    sonicRunning();
}



function tailsFlying(){
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
}