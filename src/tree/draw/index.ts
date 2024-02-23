import { canvas, ctx } from '../core';
import { adjustHue, getRadianAngle } from './helpers';

type Args = {
  x?: number;
  y?: number;
  length: number;
  angle?: number;
  deep?: number;
  offset_angle: number;
  maxDeep: number;
  angleFactor: number;
  color: number;
  colorFactor: number;
};

export const drawLineFromCenter = ({
  x = 0,
  y = 0,
  length,
  angle = 45,
  offset_angle,
  deep = 1,
  maxDeep,
  angleFactor,
  colorFactor,
  color,
}: Args) => {
  if (deep > maxDeep) return;

  const radianAngle = getRadianAngle(angle);
  const radianAngleMirror = getRadianAngle(angle) + Math.PI / 2;

  let x_1 = length * Math.cos(radianAngle);
  let y_1 = length * Math.sin(radianAngle);

  let x_2 = length * Math.cos(radianAngleMirror);
  let y_2 = length * Math.sin(radianAngleMirror);

  ctx.strokeStyle = adjustHue(color, deep / colorFactor);

  if (deep > 5) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + x_1, y + y_1);
    ctx.moveTo(x, y);
    ctx.lineTo(x + x_2, y + y_2);
    ctx.stroke();
  }

  drawLineFromCenter({
    x: x + x_1,
    y: y + y_1,
    length: length * 0.7,
    angle: angle - offset_angle + angleFactor,
    deep: deep + 1,
    offset_angle,
    maxDeep,
    angleFactor,
    color,
    colorFactor,
  });

  drawLineFromCenter({
    x: x + x_2,
    y: y + y_2,
    length: length * 0.7,
    angle: angle + offset_angle,
    deep: deep + 1,
    offset_angle,
    maxDeep,
    angleFactor,
    color,
    colorFactor,
  });
};
