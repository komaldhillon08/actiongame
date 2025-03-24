const scoreCont = document.querySelector(".scoreCont"); // Select the element with the ID 'scoreContainer'
score = 0 ;
cross = true ; 
let gameoveraudio = new Audio('./music/gameover.mp3');

let music = new Audio("./music/music.mp3") ;


setTimeout(() => {
    music.play();
},1000);

document.onkeydown = function (e) {
    console.log("key code is ", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animatedion")
        setTimeout(() => {
            dino.classList.remove("animatedion")
        }, 1000)

    }
    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinox + 100 + "px" ; 
    }
    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = (dinox - 100) + "px" ; 
    }
}
// game over
setInterval(() => {
    dino = document.querySelector(".dino");
    obstacle = document.querySelector(".obstacle");
    gameover = document.querySelector(".gameover");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    offsetx = Math.abs(dx - ox);
    offsety = Math.abs(dy - oy);

  //  console.log(offsetx, offsety);

    if (offsetx < 75 && offsety < 52) {
// game over 
        gameover.style.visibility = 'visible'; // Correct visibility value
        obstacle.classList.remove('obstacleAni');
    }
    else if(offsetx < 145 && cross){
        score += 1;
        updateScore(score) ;
        cross = false ; 
        setTimeout(() => {
            cross = true ; 
        }, 1000);
        
        setTimeout(() => {
            anydur =  parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));
            newDur = anydur - 0.1 ;
            obstacle.style.animationDuration = newDur + " s "  ; 
        }, 1000);
    }


}, 10)


// score function
function updateScore(score) {
    scoreCont.innerText = "Your Score : " + score
    scoreCont.style.transition = 'all 1s ease-in-out';
   
}







