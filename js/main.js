const canvas = document.querySelector("#canvas");

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

const position = Array(300).join(0).split("");

const ctx = canvas.getContext("2d");
// console.log(ctx)

const initMatrix = () => {
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(initMatrix, 70);