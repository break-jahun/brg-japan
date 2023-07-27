import { GradingOrderAttributes } from '../grading/gradingOrder';

export interface AddressAttributes {
  id?: number;
  mbId?: number;
  gradingOrders?: GradingOrderAttributes[];
  title: string;
  name: string;
  phone: string;
  address: string;
  basicAddress: string;
  extraAddress?: string;
  isDefault: boolean;
  memo?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  postalCode?: string;
}

/**
 * @remarks add address type
 *
 */
export interface RequestAddAddressType
  extends Pick<
    AddressAttributes,
    | 'address'
    | 'basicAddress'
    | 'extraAddress'
    | 'phone'
    | 'name'
    | 'title'
    | 'mbId'
    | 'memo'
    | 'postalCode'
  > {}
export interface RequestUpdateAddressType extends RequestAddAddressType {
  id?: number;
}

export const initAddress: AddressAttributes = {
  title: '',
  name: '',
  phone: '',
  address: '',
  basicAddress: '',
  extraAddress: '',
  isDefault: false,
};
