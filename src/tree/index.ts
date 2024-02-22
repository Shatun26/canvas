import { canvas, ctx } from './core';
import { drawLineFromCenter } from './draw';
import { CONST } from './draw/constants';

// const slider = document.getElementById('slider') as HTMLInputElement;
// slider.addEventListener('input', () => {
//   sliderValue = +slider.value;
//   ctx.clearRect(-1000, -1000, 30000, 20000);

//   drawLineFromCenter({
//     x: 0,
//     y: 0,
//     length: CONST.lineLenght,
//     angle: CONST.angle,
//     deep: 0,
//     offset_angle: sliderValue,
//   });
// });

let sliderValue = 0;
ctx.lineWidth = 4;
const drawFrame = () => {
  sliderValue += 1;
  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width * 2,
    canvas.height * 2
  );

  drawLineFromCenter({
    length: CONST.lineLenght,
    angle: CONST.angle,
    deep: 1,
    offset_angle: sliderValue,
  });

  requestAnimationFrame(drawFrame);
};

requestAnimationFrame(drawFrame);
