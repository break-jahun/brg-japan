import { MutableRefObject } from 'react';
import Slider from 'react-slick';

export interface SliderProps {
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
  sliderRef: MutableRefObject<Slider | null>;
}
