import { ReactNode } from 'react';

export interface KeyObject {
  value: string;
  text: string;
  textElement?: Element;
  color?: string;
  renderCell?: (val: any) => ReactNode;
}

export interface ObjectTableDataProps {
  item: {
    [key: string]: unknown;
  };
  keys: Array<KeyObject | Array<KeyObject>>;
}

function useObjectTable({ item, keys }: ObjectTableDataProps) {
  return {
    item,
    keys,
  };
}

export default useObjectTable;
