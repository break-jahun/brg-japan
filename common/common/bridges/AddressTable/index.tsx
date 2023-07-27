import AddressTableHeader from '@/common/bridges/AddressTable/AddressTableHeader';
import SummaryTableLayout from '@/common/components/SummaryTableLayout';
import { AddressAttributes } from '@/common/types/user/address';
import { ReactChild } from 'react';

interface Props {
  children: ReactChild;
  handleOpen: () => void;
  address: AddressAttributes | null;
}

const AddressTable = ({ handleOpen, children, address }: Props) => {
  return (
    <SummaryTableLayout>
      <AddressTableHeader handleOpen={handleOpen} address={address} />
      {children}
    </SummaryTableLayout>
  );
};

export default AddressTable;
