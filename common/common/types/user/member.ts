import { AddressAttributes } from './address';
import { GradingOrderAttributes } from '../grading/gradingOrder';

export const UserRoles = {
  admins: ['ADMIN'],
  vips: ['VIP1', 'VIP2', 'VIP3', 'EMPLOYEE'],
  users: ['NORMAL', 'TAIWAN'],
  testUsers: ['TEST'],
} as const;

export type AdminUserType = typeof UserRoles.admins[number];
export type VIPUserType = typeof UserRoles.vips[number];
export type NormalUserType = typeof UserRoles.users[number];
export type UserType = AdminUserType | VIPUserType | NormalUserType;

export type MbStatus = 'NORMAL' | 'SUSPENDED' | 'NOT_APPROVED' | 'DORMANCY';
export type Social = 'KAKAO' | 'NAVER' | 'GOOGLE' | 'FACEBOOK';

export interface MemberAttributes {
  id: number;
  mbId: string;
  addresses?: AddressAttributes[];
  gradingOrders?: GradingOrderAttributes[];
  mbNick: string;
  mbName: string;
  mbPhone?: string;
  mbEmail: string;
  mbPhoto?: string;
  mbThumbnail?: string;
  mbStatus: MbStatus;
  mbType: UserType;
  social?: Social;
  socialId?: string;
  createdAt?: string;
  updatedAt?: string;
  isAuthorized?: boolean;
  isAgreeAdvertisement?: boolean;
  isAgreedOver14?: boolean;
  supportRegionId: number;
}

export const initMember: MemberAttributes = {
  id: -1,
  mbId: '',
  mbNick: '',
  mbName: '',
  mbPhone: '',
  mbEmail: '',
  mbPhoto: '',
  mbThumbnail: '',
  mbStatus: 'NOT_APPROVED',
  mbType: 'NORMAL',
  socialId: '',
  createdAt: '',
  supportRegionId: 1,
};
