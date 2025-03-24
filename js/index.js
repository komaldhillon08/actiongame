const scoreCont = document.querySelector(".scoreCont"); // Select the element with the ID 'scoreContainer'
score = 0 ;
cross = true ; 


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

    if (offsetx < 93 && offsety < 52) {

        gameover.style.visibility = 'visible'; // Correct visibility value
        obstacle.classList.remove('obstacleAni');
    }
    else if(offsetx < 145 && cross){
        score += 1;
        updateScore(score) ;
        cross = false ; 
        setTimeout(() => {
            cross = true ; 
        }, 500);
    }


}, 100)


// score function
function updateScore(score) {
    scoreCont.innerText = "Your Score :" + score
}







