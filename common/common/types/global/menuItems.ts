import { ReactNode } from 'react';

export interface MenuItemType {
  icon?: ReactNode;
  title: string;
  to?: string;
  children?: MenuItemType[];
}
