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
const slider1Value1 = document.getElementById(
  'slider1Value1'
) as HTMLSpanElement;

const slider2 = document.getElementById('slider2') as HTMLInputElement;
const slider1Value2 = document.getElementById(
  'slider1Value2'
) as HTMLSpanElement;

export const SLIDERS = {
  s1: 0.2,
  s2: 12,
};

slider1.addEventListener('input', () => {
  SLIDERS.s1 = +slider1.value;
  slider1Value1.innerText = slider1.value;
});

slider2.addEventListener('input', () => {
  SLIDERS.s2 = +slider2.value;
  slider1Value2.innerText = slider2.value;
});
