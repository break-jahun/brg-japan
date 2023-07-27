import { ProductOrderAttributes } from './productOrder';

export interface ProductAttributes {
  id: number;
  productOrders?: ProductOrderAttributes[];
  name: string;
  nameEnglish: string;
  description: string;
  productPhoto?: string;
  productDetailPhoto?: string;
  price: number;
  purchaseLimit: number;
  stock: number;
  manufacturer: string;
  releaseDate: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
