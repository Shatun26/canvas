import { SLIDERS } from '../menu';
import { canvas, ctx } from './core';
import { drawLineFromCenter } from './draw';
import { CONST } from './draw/constants';

window.addEventListener('resize', () => (ctx.lineWidth = 4));
ctx.lineWidth = 4;

let sliderValue = 0;

const drawFrame = () => {
  sliderValue += SLIDERS.s1;
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
    maxDeep: SLIDERS.s2,
    offset_angle: sliderValue,
  });

  requestAnimationFrame(drawFrame);
};

requestAnimationFrame(drawFrame);
