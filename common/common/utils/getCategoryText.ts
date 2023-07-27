import { LocaleType } from '../types/common';
import { CardCategory } from '../types/grading/gradingOrderItem';

type GetCategoryText = {
  [firstKey in CardCategory]: {
    [secondKey in LocaleType]: string;
  };
};

const getCategoryText: GetCategoryText = {
  SPORTS: {
    ko: '스포츠 카드',
    en: 'Sports card',
    tw: '球員卡',
  },
  ETC: {
    ko: '기타 카드',
    en: 'Etc card',
    tw: '其他卡片',
  },
  POKEMON: {
    ko: '포켓몬 카드',
    en: 'Pokemon card',
    tw: '寶可夢卡',
  },
  YUGIOH: {
    ko: '유희왕 카드',
    en: 'Yugioh card',
    tw: '遊戲王卡',
  },
  ETC_TCG: {
    ko: '기타 TCG 카드',
    en: 'Etc TCG card',
    tw: '其他TCG卡片',
  },
};

export const getCategoryExampleText: GetCategoryText = {
  POKEMON: {
    ko: '',
    en: '',
    tw: '',
  },
  YUGIOH: {
    ko: '',
    en: '',
    tw: '',
  },
  ETC_TCG: {
    ko: '뱅가드, MTG 등',
    en: 'Vanguard, MTG, etc',
    tw: 'Vanguard, MTG, etc',
  },
  SPORTS: {
    ko: '야구, 농구, 축구, 배구 카드 등',
    en: 'Baseball, Basketball, Soccer, Volleyball, etc',
    tw: 'Baseball, Basketball, Soccer, Volleyball, etc',
  },
  ETC: {
    ko: '엔터테인먼트 카드 등',
    en: 'Entertainment Card, etc',
    tw: 'Entertainment Card, etc',
  },
};

export default getCategoryText;
