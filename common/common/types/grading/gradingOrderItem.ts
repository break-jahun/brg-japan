import { FileInfoAttributes } from '../fileInfo';
import { CardAttributes } from './card';
import { GradingOrderAttributes, NewCardCategory } from './gradingOrder';

export const GRADING_ORDER_ITEM = {
  TYPE: {
    GRADING_CARD: 'GRADING_CARD',
    GRADING_CARD_AUTO: 'GRADING_CARD_AUTO',
    KOR_GRADING_CARD: 'KOR_GRADING_CARD',
    KOR_GRADING_CARD_AUTO: 'KOR_GRADING_CARD_AUTO',
    POKEMON: 'POKEMON',
    YUGIOH: 'YUGIOH',
  } as const,
  AUTO_TYPE: ['GRADING_CARD_AUTO', 'KOR_GRADING_CARD_AUTO'] as const,
  CORRESPOND_CHECK: {
    NOT_DETERMINED: 'NOT_DETERMINED',
    OMITTED: 'OMITTED',
    MISS_INPUT: 'MISS_INPUT',
    UNGRADABLE: 'UNGRADABLE',
    OK: 'OK',
  } as const,
  SPORTS_TYPE: {
    VOLLEYBALL: 'VOLLEYBALL',
    BASEBALL: 'BASEBALL',
    BASKETBALL: 'BASKETBALL',
    SOCCER: 'SOCCER',
    FOOTBALL: 'FOOTBALL',
    F1: 'F1',
    POKEMON: 'POKEMON',
    HOCKEY: 'HOCKEY',
    ENTERTAINMENT: 'ENTERTAINMENT',
    DRAGONBALL: 'DRAGONBALL',
    DIGIMON: 'DIGIMON',
    WEISS_SCHWARZ: 'WEISS_SCHWARZ',
    WRESTLING: 'WRESTLING',
    STAR_WARS: 'STAR_WARS',
    CHEERLEADING: 'CHEERLEADING',
    GOLF: 'GOLF',
    TENNIS: 'TENNIS',
    ETC: 'ETC',
    MTG: 'MTG',
    MMA: 'MMA',
    YUGIOH: 'YUGIOH',
  } as const,
};

export const CARD_CATEGORY = [
  'POKEMON',
  'YUGIOH',
  'ETC_TCG',
  'SPORTS',
  'ETC',
] as const;

export const isAutoDisabledCategoryList = ['POKEMON', 'YUGIOH', 'ETC_TCG'];

/**
 * @remarks
 * 그레이딩 신청페이지에 표시될 스포츠타입 리스트
 */
export const DISPLAY_SPORTS_LIST = [
  GRADING_ORDER_ITEM.SPORTS_TYPE.BASEBALL,
  GRADING_ORDER_ITEM.SPORTS_TYPE.BASKETBALL,
  GRADING_ORDER_ITEM.SPORTS_TYPE.SOCCER,
  GRADING_ORDER_ITEM.SPORTS_TYPE.VOLLEYBALL,
  GRADING_ORDER_ITEM.SPORTS_TYPE.POKEMON,
  GRADING_ORDER_ITEM.SPORTS_TYPE.YUGIOH,
  GRADING_ORDER_ITEM.SPORTS_TYPE.ENTERTAINMENT,
  GRADING_ORDER_ITEM.SPORTS_TYPE.ETC,
] as const;

export type GradingOrderItemType =
  typeof GRADING_ORDER_ITEM.TYPE[keyof typeof GRADING_ORDER_ITEM.TYPE];

export type GradingOrderItemCorrespondCheck =
  typeof GRADING_ORDER_ITEM.CORRESPOND_CHECK[keyof typeof GRADING_ORDER_ITEM.CORRESPOND_CHECK];

export type SportsType =
  typeof GRADING_ORDER_ITEM.SPORTS_TYPE[keyof typeof GRADING_ORDER_ITEM.SPORTS_TYPE];

export type DisplaySportsType = typeof DISPLAY_SPORTS_LIST[number];

export type CardCategory = typeof CARD_CATEGORY[number];

export interface GradingOrderItemAttributes {
  id?: number;
  gradingOrderId?: number;
  gradingOrder?: GradingOrderAttributes;
  refundable?: boolean;
  cardId?: number;
  card?: CardAttributes;
  brand: string;
  setName: string;
  description: string;
  parallel?: string;
  limitNumber?: string;
  sportsType: SportsType;
  playerName: string;
  year: string;
  cardNumber?: string;
  isAuto?: boolean;
  cardMinGrade?: number;
  autoMinGrade?: number;
  casing: boolean;
  scoreText?: string;
  signer?: string;
  gradingOrderItemType: GradingOrderItemType;
  correspondCheck?: GradingOrderItemCorrespondCheck;
  manualScore?: number;
  autoScore?: number;
  serial?: string;
  createdAt?: string;
  updatedAt?: string;
  isDefectChecked?: boolean;
  imageFiles?: FileInfoAttributes[];
  defectMemo?: string;
  amount?: number;
  price?: number;
  cardCategory?: CardCategory;
  quantity?: number;
}

export interface NewGradingOrderItem {
  cardCategory: NewCardCategory;
  isAuto: boolean;
  cardNumber?: string;
  description?: string;
  playerName?: string;
  setName?: string;
  sportsType?: string;
  year?: string;
  brand?: string;
  parallel?: string;
  limitNumber?: string;
  autoMinGrade?: number;
  cardMinGrade?: number;
  casing: boolean;
}

export interface DefectInfoType {
  frontFlaws: number;
  frontCenteringTop: number;
  frontCenteringBottom: number;
  frontCenteringLeft: number;
  frontCenteringRight: number;
  frontPollution: string;
  frontAdminReview?: string;
  backFlaws: number;
  backCenteringTop: number;
  backCenteringBottom: number;
  backCenteringLeft: number;
  backCenteringRight: number;
  backPollution: string;
  backAdminReview?: string;
}

export const initGradingOrderItem: GradingOrderItemAttributes = {
  playerName: '',
  signer: '',
  gradingOrderItemType: 'GRADING_CARD',
  correspondCheck: 'NOT_DETERMINED',
  brand: '',
  setName: '',
  description: '',
  year: '',
  sportsType: 'ETC',
  cardNumber: '',
  casing: true,
  cardCategory: 'POKEMON',
  amount: 0,
  price: 0,
};
