import { Modal } from '@mui/material';
import AddressListModal from '@/common/bridges/AddressListModal';
import useModal from '@/common/modules/hooks/useModal';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import { shippingAddressState } from '@/common/modules/recoil/address';
import { AddressAttributes } from '@/common/types/user/address';
import AddressTable from '@/common/bridges/AddressTable';
import ShippingAddressTableBody from './ShippingAddressTableBody';

const ShippingAddressTable = () => {
  const { t } = useTranslation();
  const { isOpen, handleClose, handleOpen } = useModal();

  const [shippingAddress, setShippingAddress] =
    useRecoilState(shippingAddressState);

  const handleSelectedAddressSaveClick = (address: AddressAttributes) => {
    setShippingAddress(address);
    alert(t('account/adress/changed-shipping-destination'));
    handleClose();
  };

  return (
    <>
      <AddressTable handleOpen={handleOpen} address={shippingAddress}>
        <ShippingAddressTableBody />
      </AddressTable>
      <Modal open={isOpen}>
        <AddressListModal
          handleClose={handleClose}
          handleSaveClick={handleSelectedAddressSaveClick}
          selectedItem={shippingAddress || undefined}
        />
      </Modal>
    </>
  );
};

export default ShippingAddressTable;
