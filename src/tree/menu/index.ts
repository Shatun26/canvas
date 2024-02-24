import { SLIDERS_DATA, slidersWrapper } from './constants';
import { MENU_CLASSES } from './types';

const sliders = slidersWrapper.querySelectorAll<HTMLDivElement>(
  `.${MENU_CLASSES.sliderContainer}`
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
    `.${MENU_CLASSES.sliderInput}`
  ) as HTMLInputElement;

  const sliderValue = slider.querySelector(
    `.${MENU_CLASSES.sliderValue}`
  ) as HTMLSpanElement;

  const sliderId = slider.id as keyof typeof SLIDERS_DATA;

  input?.addEventListener('input', () => {
    SLIDERS_DATA[sliderId].value = +input.value;
    sliderValue.innerText = input.value;
  });
});

let cashedSpeed = SLIDERS_DATA.speed.value;
document.body.onkeydown = (e) => {
  if (e.code === 'Space') {
    if (SLIDERS_DATA.speed.value) {
      SLIDERS_DATA.speed.value = 0;
    } else {
      SLIDERS_DATA.speed.value = cashedSpeed;
    }
  }
};
