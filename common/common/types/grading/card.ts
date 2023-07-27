import { GradingOrderItemAttributes, SportsType } from './gradingOrderItem';

export interface CardTagAttributes {
  id?: number;
  name: string;
  description?: string;
}

export interface CardAttributes {
  id?: number;
  tags?: CardTagAttributes[];
  gradingOrderItems?: GradingOrderItemAttributes[];
  sportsType: SportsType;
  playerName: string;
  year: number;
  brand: string;
  setName: string;
  limitNumber?: string;
  cardNumber?: string;
  description: string;
  isAuto: boolean;
  createdAt?: string;
  updatedAt?: string;
}
