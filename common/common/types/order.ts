import { GradingOrderAttributes } from './grading/gradingOrder';
import { ResponseType } from './common';
import { FileInfoAttributes } from './fileInfo';
import { ProductOrderAttributes } from './product/productOrder';

export interface GetGradingOrderById extends ResponseType {
  data: GradingOrderAttributes;
}
export interface GetGradingOrder extends ResponseType {
  data: { count: number; rows: GradingOrderAttributes[] };
}

export interface PostTempSaveSimpleOrder extends ResponseType {
  data: GradingOrderAttributes;
}
export interface GetTemporaryStorage extends ResponseType {
  data: { count: number; rows: GradingOrderAttributes[] };
}

export interface SaveTemporaryStorage extends ResponseType {
  data: GradingOrderAttributes;
}
export interface DeleteTemporaryStorage extends ResponseType {
  data: number;
}

export interface UploadedPhotoData {
  key: string;
  url: string;
}
export interface PostUploadPhotos extends ResponseType {
  data: UploadedPhotoData[];
}

export interface PostRegisterPhotos extends ResponseType {
  data: FileInfoAttributes[];
}
export interface GetGradingOrderLimitQuantity extends ResponseType {
  data: {
    id: number;
    orderLimit: number;
    orderType: string;
    updatedAt: string;
    createdAt: string;
    currentOrders: number;
    deletedAt: string | null;
  };
}

export interface GetProductOrder extends ResponseType {
  data: { count: number; rows: ProductOrderAttributes[] };
}
export interface UpdateDeliveryInfoIn extends ResponseType {
  data: GradingOrderAttributes;
}

export interface PostCheckDeliveryCompleteOrders extends ResponseType {
  data: [];
}
