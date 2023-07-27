import { atom, selector } from 'recoil';
import commonEffects from './commonEffects';

export interface Image {
  id: number;
  url: string;
}

export const imagesState = atom<Image[]>({
  key: 'imageState',
  default: [],
  effects: commonEffects({ name: 'imageState', persist: true }),
});

export const imageIdsState = selector<number[]>({
  key: 'imageIdsState',
  get: ({ get }) => {
    return get(imagesState).map((image) => image.id);
  },
});
