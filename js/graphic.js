var canvas = document.querySelector("#graphic-1");
var div2 = document.getElementById("content");
const ctx = canvas.getContext('2d')

canvas.width = 1000;
canvas.height = 1000;

const mouse = {
    x: undefined,
    y: undefined,
}

document.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    var rad1 = mouse.x/window.innerHeight
    var rad2 = mouse.y/window.innerHeight
    var sum = (rad1+rad2)
    rad1 = 480*rad1/sum
    rad2 = 480*rad2/sum
    drawSpirograph(ctx, canvas.width / 2, canvas.height / 2, rad1, rad2, 8.5);
})

function drawSpirograph(context, cx, cy, radius1, radius2, ratio) {
    context.clearRect(0,0,canvas.width,canvas.height)
    var x, y, theta;
    context.lineWidth = 8;
    // Move to starting point (theta = 0)
    context.beginPath();
    context.moveTo(cx + radius1 + radius2, cy);

    // Draw segments from theta = 0 to theta = 2PI
    for (theta = 0; theta <= Math.PI * 8; theta += 0.005) {
        x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
        y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
        context.lineTo(x, y);
    }

    // Apply stroke
    context.stroke();
}
