window.onload = () =>{
    tornado();
}





function tornado(){
    var spriteFrame = [
    "0px",
    "-362px",
    "-724px",
    "-1086px",

    ]

    const refreshRate = 1000 / 12;
    const maxFrames = 4;
    let sprite = document.getElementById('tornadoSprite');
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