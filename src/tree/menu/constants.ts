import { TSliderData } from './types';

export const slidersWrapper = document.createElement('div');

export const SLIDERS_DATA: TSliderData = {
  speed: {
    min: -2,
    max: 2,
    step: 0.01,
    value: 0.4,
    name: 'speed',
  },
  deep: { min: 2, max: 20, step: 1, value: 12, name: 'deep' },
  deepStart: {
    min: 2,
    max: 20,
    step: 1,
    value: 5,
    name: 'deep start',
  },
  lenght: { min: 1, max: 500, step: 1, value: 250, name: 'lenght' },
  width: { min: 1, max: 10, step: 0.2, value: 3.2, name: 'width' },
  angleFactor: { min: 0, max: 180, step: 1, value: 138, name: 'angleFactor' },
  colorFactor: { min: 0, max: 100, step: 1, value: 10, name: 'colorFactor' },
  color: { min: 0, max: 300, step: 1, value: 144, name: 'color' },
} as const;
