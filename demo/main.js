const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

let t = 0;

function frame() {
    t += 0.05;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const x = 100 + Math.sin(t) * 60;

    ctx.fillStyle = "lime";
    ctx.fillRect(x, 40, 40, 40);

    requestAnimationFrame(frame);
}

frame();
