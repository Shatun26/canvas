import { SLIDERS_DATA, slidersWrapper } from './constants';
import { SLIDER_CLASSES } from './types';

const sliders = slidersWrapper.querySelectorAll<HTMLDivElement>(
  `.${SLIDER_CLASSES.sliderContainer}`
);

sliders.forEach((slider) => {
  slider.addEventListener('mousedown', () => {
    sliders.forEach((s) => {
      if (s !== slider) {
        s.style.opacity = '0.05';
      }
    });
  });

  slider.addEventListener('mouseup', () => {
    sliders.forEach((s) => {
      s.style.opacity = '1';
    });
  });
});

sliders.forEach((slider) => {
  const input = slider.querySelector(
    `.${SLIDER_CLASSES.sliderInput}`
  ) as HTMLInputElement;

  const sliderValue = slider.querySelector(
    `.${SLIDER_CLASSES.sliderValue}`
  ) as HTMLSpanElement;

  const sliderId = slider.id as keyof typeof SLIDERS_DATA;

  input?.addEventListener('input', () => {
    SLIDERS_DATA[sliderId].value = +input.value;
    sliderValue.innerText = input.value;
  });
});
