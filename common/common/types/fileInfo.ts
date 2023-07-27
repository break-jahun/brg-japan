export type FileStatus = 'USING' | 'TEMP_SAVED';
export type FileUploader = 'user' | 'admin';
export type FileUsedAt =
  | 'VSC'
  | 'ORDER_CONFIRM'
  | 'ORDER_CONFIRM_ADMIN'
  | 'DEFECT_CHECK'
  | 'CASING'
  | 'FRONT_PHOTO'
  | 'BACK_PHOTO'
  | 'COMPLETE_PHOTO';

export interface FileInfoAttributes {
  id?: number;
  gradingOrderId?: number;
  gradingOrderItemId?: number;
  fileUploader: FileUploader;
  url: string;
  key: string;
  status?: FileStatus;
  usedAt: FileUsedAt;
  updatedAt?: string;
  createdAt?: string;
}
