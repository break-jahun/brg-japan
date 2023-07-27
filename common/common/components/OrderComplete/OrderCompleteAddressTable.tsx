import useModal from '@/common/modules/hooks/useModal';
import AddressTable from '@/common/bridges/AddressTable';
import AddressListModal from '@/common/bridges/AddressListModal';
import { Box, Modal, Typography } from '@mui/material';
import { AddressAttributes } from '@/common/types/user/address';

interface OrderCompleteAddressTableProps {
  handleOpen: () => void;
  isOpen: boolean;
  handleClose: () => void;
  handleSaveOrderAddress: (address: AddressAttributes) => void;
  address: AddressAttributes | undefined;
  refreshOrderItem: () => void;
  addressName: string;
  mbName: string;
  phone: string;
  memo: string;
  name: string;
}

const OrderCompleteAddressTable = (props: OrderCompleteAddressTableProps) => {
  const {
    handleOpen,
    isOpen,
    handleClose,
    handleSaveOrderAddress,
    address,
    refreshOrderItem,
    addressName,
    mbName,
    memo,
    phone,
    name,
  } = props;

  return (
    <>
      <AddressTable
        handleOpen={handleOpen}
        address={address as AddressAttributes}
      >
        <Box py={1}>
          <Box display="flex" flexDirection="column">
            <Typography variant="caption" gutterBottom>
              {name}
            </Typography>
            <Typography variant="caption" gutterBottom>
              {addressName}
            </Typography>
            <Box>
              <Typography variant="caption" gutterBottom mr={4}>
                {mbName}
              </Typography>
              <Typography variant="caption">{phone}</Typography>
            </Box>
            <Typography variant="caption">{memo}</Typography>
          </Box>
        </Box>
      </AddressTable>
      <Modal open={isOpen}>
        <AddressListModal
          handleClose={handleClose}
          handleSaveClick={handleSaveOrderAddress}
          selectedItem={address}
          onModifySuccess={refreshOrderItem}
        />
      </Modal>
    </>
  );
};

export default OrderCompleteAddressTable;
