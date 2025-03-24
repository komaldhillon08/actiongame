document.onkeydown = function (e) {
    console.log("key code is " , e.keyCode);
    if (e.keyCode == 75) {
        dino = document.querySelector(".dino") ; 
        dino.classList.add("animatedion")
        setTimeout( () => {
            dino.classList.remove("animatedion")
        } , 700)

    }
}
  