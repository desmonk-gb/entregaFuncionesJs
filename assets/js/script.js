




    const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(this, 'yellow');
});
const pintar=(elemento, color = 'green')=>{
    elemento.style.backgroundColor = color;
    }

    
