const sliders = document.querySelectorAll<HTMLDivElement>('.sliderContainer');

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

const slider1 = document.getElementById('slider1') as HTMLInputElement;
const slider1Value = document.getElementById('slider1Value') as HTMLSpanElement;

export const SLIDERS = {
  s1: 0.2,
};

slider1.addEventListener('input', () => {
  SLIDERS.s1 = +slider1.value;
  slider1Value.innerText = slider1.value;
});
