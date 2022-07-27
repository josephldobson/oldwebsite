const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
}

document.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    var rad1 = Math.abs(canvas.width/2 - mouse.x);
    var rad2 = Math.abs(canvas.height/2 - mouse.y)/1.5;
    drawSpirograph(ctx, canvas.width / 2, canvas.height / 2, rad1, rad2, 40);
})

function drawSpirograph(context, cx, cy, radius1, radius2, ratio) {
    context.clearRect(0,0,canvas.width,canvas.height)
    var x, y, theta;

    // Move to starting point (theta = 0)
    context.beginPath();
    context.moveTo(cx + radius1 + radius2, cy);

    // Draw segments from theta = 0 to theta = 2PI
    for (theta = 0; theta <= Math.PI * 2; theta += 0.01) {
        x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
        y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
        context.lineTo(x, y);
    }

    // Apply stroke
    context.stroke();
}