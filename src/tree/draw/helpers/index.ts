const getRadianAngle = (angle: number) => (angle * Math.PI) / 180;

const adjustHue = (color: number, i: number) => {
  const hue = (color + i * 360) % 360;
  return `hsl(${hue}, 100%, 50%)`;
};

export { getRadianAngle, adjustHue };
