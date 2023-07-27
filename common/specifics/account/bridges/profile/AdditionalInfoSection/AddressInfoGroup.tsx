import { Box, Modal, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CommonButton } from '@/common/components/Button';
import ObjectTable from '@/common/components/ObjectTable';
import useAddress from '@/common/modules/hooks/useAddress';
import AddressListModal from '@/common/bridges/AddressListModal';
import useOpen from '@/common/modules/hooks/useOpen';
import { AddressAttributes } from '@/common/types/user/address';
import { useDefaultAddressUpdateMutation } from '@/common/modules/hooks/useAddressQuery';

function AddressInfoGroupParser() {
  const { t } = useTranslation();
  const text = {
    buttonText: t('account/profile/manage-address'),
    noAddressText: t('account/address/no-address'),
  };
  const { open: isOpen, handleOpen, handleClose } = useOpen();

  const {
    defaultAddress,
    defaultKeys: defaultAddressKeys,
    addressList,
  } = useAddress();

  const { mutate } = useDefaultAddressUpdateMutation();

  const handleSaveClick = (address: AddressAttributes) => {
    if (address.id) {
      mutate(address.id, {
        onSuccess: () => {
          alert(t('account/adress/changed-shipping-destination'));
          handleClose();
        },
      });
    }
  };

  return {
    text,
    defaultAddress,
    defaultAddressKeys,
    isOpen,
    handleOpen,
    handleClose,
    handleSaveClick,
    addressList,
  };
}

function AddressInfoGroup() {
  const {
    text,
    defaultAddress,
    defaultAddressKeys,
    isOpen,
    handleOpen,
    handleClose,
    handleSaveClick,
  } = AddressInfoGroupParser();

  return (
    <Box p={2}>
      {defaultAddress ? (
        <ObjectTable item={defaultAddress as any} keys={defaultAddressKeys} />
      ) : (
        <Typography variant="body2">{text.noAddressText}</Typography>
      )}
      <Box mt={1}>
        <CommonButton buttonType="GRAY" fullWidth onClick={handleOpen}>
          {text.buttonText}
        </CommonButton>
      </Box>
      <Modal open={isOpen}>
        <AddressListModal
          handleClose={handleClose}
          handleSaveClick={handleSaveClick}
        />
      </Modal>
    </Box>
  );
}
export default AddressInfoGroup;
