var chicken = document.getElementById("chicken");
var obstacle = document.getElementById("obstacle");
var counter = 0;

function jump(){
    if (chicken.classList != "animate") {
        chicken.classList.add("animate");
    }
    setTimeout(function(){
        chicken.classList.remove("animate");
    }, 500);
} 

var lose = setInterval(function(){
    
    var chickenTop = parseInt(window.getComputedStyle
        (chicken).getPropertyValue("top"));
    

    var blockLeft = parseInt(window.getComputedStyle
        (obstacle).getPropertyValue("left"));

        if (blockLeft < 20 && blockLeft > 0 && chickenTop >= 130) {
            obstacle.style.animation = "none";
            obstacle.style.display = "none";
            document.getElementById("score").innerHTML = "Score: " + counter;
        }
},10);

