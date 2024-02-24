import { canvas, ctx } from './core';
import { drawLineFromCenter } from './draw';
import { SLIDERS_DATA } from './menu/constants';

window.addEventListener('resize', () => (ctx.lineWidth = 4));

let sliderValue = 0;
let colorValue = 0;

const drawFrame = () => {
  sliderValue += SLIDERS_DATA.speed.value;
  colorValue += SLIDERS_DATA.colorSpeed.value;
  ctx.lineWidth = SLIDERS_DATA.width.value;

  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width * 2,
    canvas.height * 2
  );

  drawLineFromCenter({
    length: SLIDERS_DATA.lenght.value,
    maxDeep: SLIDERS_DATA.deep.value,
    offset_angle: sliderValue,
    angleFactor: SLIDERS_DATA.angleFactor.value,
    color: colorValue,
    colorFactor: SLIDERS_DATA.colorFactor.value,
    deepStart: SLIDERS_DATA.deepStart.value,
  });

  requestAnimationFrame(drawFrame);
};

requestAnimationFrame(drawFrame);
