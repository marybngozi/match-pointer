const gameArea = document.querySelector('#gameGround');
let icon = document.querySelector('#cursor');

function randomNum(min, max) { // min and max included 
    return (Math.random() * (max - min + 1) + min).toFixed(3);
}

function moveIcon(gameArea, icon) {
    let iconx = randomNum(gameArea.left, gameArea.right - 100);
    let icony = randomNum(gameArea.top, gameArea.bottom - 100);

    icon.style.left = `${iconx}px`;
    icon.style.top = `${icony}px`; 

    return {iconx, icony};
}

function animateBg(bgspeed, gameArea) {
    bgspeed *= 1000
    const bgImgPaths = ["../img/bg1.jpg", "../img/bg2.jpg", "../img/bg3.jpg", "../img/bg4.jpg", "../img/bg5.jpg", "../img/bg6.jpg", "../img/bg7.jpg"];
    let index = 0;
    setInterval(() => {
        index = (index + 1) % bgImgPaths.length;
        gameArea.style.background = `url(${bgImgPaths[index]})`;
    }, bgspeed);
}

function startGame (pointerSpeed, bgSpeed, gameArea, icon) {
    animateBg(bgSpeed, gameArea);

    gameArea = gameArea.getBoundingClientRect();
    pointerSpeed *= 1000;

    let clickx = 0;
    let clicky = 0;

    document.addEventListener('click', e => {
        clickx = e.clientX;
        clicky = e.clientY;
    });

    setInterval(() => {
        moveIcon(gameArea, icon);
        // debugger;
        console.log(clickx);
        console.log(iconx);
        console.log(clicky);
        console.log(icony);
    }, pointerSpeed);

}

let pointerSpeed = 1.0;
let pointerSize = 18;

document.querySelector('#pointerSpeed').addEventListener('change', e => {
    pointerSpeed = parseInt(e.target.value);
});
document.querySelector('#pointerSize').addEventListener('change', e => {
    pointerSize = parseInt(e.target.value);
    console.log(pointerSize)
    icon.width = pointerSize;
    icon.height = pointerSize;
});

bgSpeed = 2.4;

document.querySelector('#startGame').addEventListener('click', e => {
    // pointerSpeed = 1.8;
    pointerSize = 18;
    startGame(pointerSpeed, bgSpeed, gameArea, icon)
})

