var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var initialCanvas = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = '#213a63';
    document.body.appendChild(canvas);
};
var drawLineFromCenter = function () {
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var angle = 45;
    var commonAngle = 0;
    var lineLenght = 200;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.translate(centerX, centerY);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -lineLenght);
    ctx.stroke();
    //////////////////////////////////////////////
    //////////////////////////////////////////////
    //////////////////////////////////////////////
    //////////////////////////////////////////////
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.rotate((angle * Math.PI + commonAngle) / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, lineLenght);
    ctx.translate(0, 0);
    ctx.rotate((angle * Math.PI + commonAngle) / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, lineLenght);
    // ctx.translate(lineLenght, 0);
    // ctx.rotate((angle * Math.PI + commonAngle) / 180);
    // ctx.moveTo(0, 0);
    // ctx.lineTo(lineLenght, 0);
    // ctx.translate(0, 0);
    // ctx.rotate((-angle * 2 * Math.PI + commonAngle) / 180);
    // ctx.moveTo(0, 0);
    // ctx.lineTo(lineLenght, 0);
    ctx.stroke();
    /////////
    // context.translate(lineLenght, 0);
    // context.rotate((angle * Math.PI + commonAngle) / 180);
    // context.moveTo(0, 0);
    // context.lineTo(lineLenght, 0);
    // context.stroke();
    // context.translate(lineLenght, 0);
    // context.rotate((angle * Math.PI + commonAngle) / 180);
    // context.moveTo(0, 0);
    // context.lineTo(lineLenght, 0);
    // context.stroke();
    // context.translate(lineLenght, 0);
    // context.rotate((angle * Math.PI + commonAngle) / 180);
    // context.moveTo(0, 0);
    // context.lineTo(lineLenght, 0);
    // context.stroke();
};
initialCanvas();
drawLineFromCenter();
console.log(12);
