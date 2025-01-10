// with this Game you control a blob character where the objective is
// to eat the small blobs on the screen, trying to achieve the highest
// score you can. while doing so you are also going to be dodging black pellets
// that are shot from 4 different sides of the screen. making it difficult.
// controls for the game are the WASD keys
// The live server extension is required to run this program if using VS Code

import flower from "./scripts/flower.js";
import chest from "./scripts/chest.js";

const ctx = canvas.getContext("2d");
const open  = document.getElementById("open");


const flowerclass = new flower();
const chestclass = new chest();

function frame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    flowerclass.draw(ctx);
    chestclass.draw(ctx);
    requestAnimationFrame(frame)

}

open.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent scrolling
    chestclass.drawpic = false;
});

open.addEventListener("mousedown", (event) => {
    event.preventDefault(); // Prevent scrolling
    chestclass.drawpic = false;
});


requestAnimationFrame(frame)