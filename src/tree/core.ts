const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d', { alpha: false })!;

const setConfig = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.translate(canvas.width / 2, canvas.height / 1.5);
  ctx.scale(-1, 1);
  ctx.rotate(Math.PI);
};

window.addEventListener('resize', setConfig);

setConfig();

document.body.appendChild(canvas);

export { ctx, canvas };
