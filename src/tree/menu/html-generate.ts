import { SLIDERS_DATA, slidersWrapper } from './constants';
import { MENU_CLASSES } from './types';

slidersWrapper.classList.add('slidersWrapper');
document.body.appendChild(slidersWrapper);

for (const [key, { min, max, step, value, name }] of Object.entries(
  SLIDERS_DATA
)) {
  slidersWrapper.innerHTML += `<div class=${MENU_CLASSES.sliderContainer} id=${key}>
    <input type="range" min=${min} max=${max} value=${value} step=${step} class=${MENU_CLASSES.sliderInput}  />
    <span class=${MENU_CLASSES.sliderValue}>${value}</span>
    <span class="name">${name}</span>
    </div>`;
}
