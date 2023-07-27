import {
  CardCategory,
  GradingOrderItemAttributes,
  NewGradingOrderItem,
} from '@/common/types/grading/gradingOrderItem';

export const parseGradingOrderItem = (
  item: GradingOrderItemAttributes
): NewGradingOrderItem => {
  return {
    cardCategory: item.cardCategory as CardCategory,
    isAuto: item.isAuto as boolean,
    cardNumber: item.cardNumber,
    description: item.description,
    playerName: item.playerName,
    setName: item.setName,
    sportsType: item.sportsType,
    year: item.year,
    brand: item.brand,
    parallel: item.parallel,
    limitNumber: item.limitNumber,
    autoMinGrade: item.autoMinGrade,
    cardMinGrade: item.cardMinGrade,
    casing: item.casing,
  };
};

// 기존 gradingOrderItem에서  사라진 필드들
// id?: number;
// gradingOrderId?: number;
// gradingOrder?: GradingOrderAttributes;
// refundable?: boolean;
// cardId?: number;
// card?: CardAttributes;
// casing: boolean;
// scoreText?: string;
// signer?: string;
// gradingOrderItemType: GradingOrderItemType;
// correspondCheck?: GradingOrderItemCorrespondCheck;
// manualScore?: number;
// autoScore?: number;
// serial?: string;
// createdAt?: string;
// updatedAt?: string;
// isDefectChecked?: boolean;
// imageFiles?: FileInfoAttributes[];
// defectMemo?: string;
// amount?: number;
// price?: number;
// quantity?: number;
