import { SLIDERS_DATA, slidersWrapper } from './constants';
import { SLIDER_CLASSES } from './types';

slidersWrapper.classList.add('slidersWrapper');
document.body.appendChild(slidersWrapper);

for (const [key, { min, max, step, value, name }] of Object.entries(
  SLIDERS_DATA
)) {
  slidersWrapper.innerHTML += `<div class=${SLIDER_CLASSES.sliderContainer} id=${key}>
    <input type="range" min=${min} max=${max} value=${value} step=${step} class=${SLIDER_CLASSES.sliderInput}  />
    <span>${name}</span>
    <span class=${SLIDER_CLASSES.sliderValue}>${value}</span>
    </div>`;
}
