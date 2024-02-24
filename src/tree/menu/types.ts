enum SliderKeys {
  speed = 'speed',
  deep = 'deep',
  lenght = 'lenght',
  width = 'width',
  angleFactor = 'angleFactor',
  colorFactor = 'colorFactor',
  colorSpeed = 'colorSpeed',
  deepStart = 'deepStart',
}

export type TSliderData = Record<
  SliderKeys,
  {
    min: number;
    max: number;
    step: number;
    value: number;
    name: string;
  }
>;

export enum MENU_CLASSES {
  sliderContainer = 'sliderContainer',
  sliderValue = 'sliderValue',
  sliderInput = 'sliderInput',
}
