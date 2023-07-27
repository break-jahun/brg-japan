import { UserType } from './member';

export interface Membership {
  mbType: UserType;
  membership: {
    discountRate: number;
  };
}
