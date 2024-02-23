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

const slider = document.getElementById('slider1') as HTMLInputElement;

export const SLIDERS = {
  s1: 0,
};

slider.addEventListener('dblclick', () => {
  SLIDERS.s1 = 0;
  slider.value = '0';
});

slider.addEventListener('input', () => {
  SLIDERS.s1 = +slider.value;
});
