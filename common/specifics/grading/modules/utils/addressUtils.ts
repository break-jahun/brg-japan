import { AddressAttributes } from '@/common/types/user/address';

export function jejuVerification(address: AddressAttributes): boolean {
  return /제주특별자치도/.test(address.address);
}

export function addressPhoneReplace(value: string): string {
  if (value.length === 9) {
    return value.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
  }
  if (value.length === 10) {
    return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }
  if (value.length === 13) {
    return value.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }
  return value;
}
