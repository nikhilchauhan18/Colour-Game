var num = 6;
var colors = randomcolors(num);
var sq = document.querySelectorAll(".square");
var message = document.querySelector(".message");
var pick = pickcolor(colors);
var correct = document.querySelector("span");
var optionbtn = document.querySelector(".reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var header = document.querySelector(".header");
correct.innerText = `'${pick}'`;

easy.addEventListener("click", ()=>{
    if(easy.classList != "selected"){
        easy.classList.add("selected");
        hard.classList.remove("selected");
        num = 3;
        colors = randomcolors(num);
        for (var i = 0; i <sq.length; i++) {
            if(colors[i]){
                sq[i].style.backgroundColor = colors[i];
            }else{
                sq[i].style.display = "none";
            }
        }
        pick = pickcolor(colors);
        correct = document.querySelector("span");
        correct.innerText = `'${pick}'`;
    }
})

hard.addEventListener("click", ()=>{
    if(hard.classList != "selected"){
        easy.classList.remove("selected");
        hard.classList.add("selected");
        num = 6;
        colors = randomcolors(num);
        for (var i = 0; i <sq.length; i++) {
            sq[i].style.backgroundColor = colors[i];
            sq[i].style.display = "block";
        }
        pick = pickcolor(colors);
        correct = document.querySelector("span");
        correct.innerText = `'${pick}'`;
    }
})


for (var i = 0; i < sq.length; i++) {
    sq[i].style.backgroundColor = colors[i];
    const x = i;

    sq[i].addEventListener("click", () => {
        const clicked = sq[x].style.backgroundColor;
        if (clicked === pick) {
            sq.forEach((square) => {
                square.style.backgroundColor = pick;
                header.style.backgroundColor = pick;
            })

            message.textContent = "Correct!";
            optionbtn.textContent = "PLAY AGAIN?"
        } else {
            sq[x].style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
        }
    })
}

function pickcolor(colors){
    const idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
}

function randomcolors(n){
    var colors = [];
    for(var i = 0; i < n; i++){
        colors[i] = randomrgb();
    }
    return colors;
}

function randomrgb(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

function reset(){
    colors = randomcolors(num);
    pick = pickcolor(colors);
    header.style.backgroundColor = "rgb(189, 131, 224)";
    correct.innerText = pick;

    for (var i = 0; i < sq.length; i++) {
        sq[i].style.backgroundColor = colors[i];
        const x = i;
    
        sq[i].addEventListener("click", () => {
            const clicked = sq[x].style.backgroundColor;
            if (clicked === pick) {
                sq.forEach((square) => {
                    square.style.backgroundColor = pick;
                })
    
                message.textContent = "Correct!";
            } else {
                sq[x].style.backgroundColor = "#232323";
                message.textContent = "Try Again!";
            }
        })
    }

}

optionbtn.addEventListener("click", reset);