window.onload = () =>{
    tailsFlying();
}



function tailsFlying(){
    var spriteFrame = [
    "0px",
    "-115px",
    ]

    const refreshRate = 1000 / 30;
    const maxFrames = 2;
    let sprite = document.getElementById('sprite');
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