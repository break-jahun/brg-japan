import { useAddressDeleteMutation } from '@/common/modules/hooks/useAddressQuery';
import { shippingAddressState } from '@/common/modules/recoil/address';
import { AddressAttributes } from '@/common/types/user/address';
import useAddressListItemParser from '@/specifics/grading/modules/hooks/parser/useAddressListItemParser';
import { Box, Radio, Typography, Button, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

interface Props {
  address: AddressAttributes;
  value: number;
  handleModifyClick: (item: AddressAttributes) => void;
}

const AddressListItem = ({ address, value, handleModifyClick }: Props) => {
  const { generalModify, generalDelete, memo } = useAddressListItemParser(
    address.memo
  );
  const { t } = useTranslation();
  const addressDeleteMutation = useAddressDeleteMutation();
  const [shippingAddress, setShippingAddress] =
    useRecoilState(shippingAddressState);

  const handleRemoveClick = (addressItem: AddressAttributes) => {
    if (!addressItem.id) {
      return;
    }
    const isConfirm = window.confirm(t('account/adress/confirm-delete'));
    if (isConfirm) {
      const isDefaultAddress = addressItem.isDefault || false;
      if (isDefaultAddress) {
        alert(t('account/adress/cant-delete-default-shipping'));
        return;
      }
      addressDeleteMutation.mutate(addressItem.id, {
        onSuccess: () => {
          alert(t('account/adress/deleted-address'));

          if (shippingAddress?.id === addressItem.id) {
            setShippingAddress(null);
          }
        },
        onError: () => {
          alert(t('account/adress/error-deleted-address'));
        },
      });
    }
  };

  return (
    <Box
      m={1}
      p={1}
      sx={{
        width: '100%',
        borderRadius: '10px',
        border: '1px solid #eeeeee',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Radio color="default" disableRipple size="small" value={value} />
        <Box pl={1} width="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption" mr="10px" fontWeight={700}>
              {address.title}
            </Typography>
            <Box display="flex">
              <ActionButton
                size="small"
                sx={{
                  color: '#0194fe',
                }}
                onClick={() => {
                  handleModifyClick(address);
                }}
              >
                {generalModify}
              </ActionButton>
              <ActionButton
                sx={{
                  color: '#f40258',
                }}
                size="small"
                onClick={() => handleRemoveClick(address)}
              >
                {generalDelete}
              </ActionButton>
            </Box>
          </Box>
          <Box display="flex">
            <Box mr={1}>
              <Typography variant="caption" fontWeight={700}>
                {address.name}
              </Typography>
            </Box>
            <Typography variant="caption">{address.phone}</Typography>
          </Box>
          <Box>
            <Typography variant="caption">{address.address}</Typography>
          </Box>
          <Box>
            <Typography variant="caption">{memo}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddressListItem;

const ActionButton = styled(Button)((props) => ({
  fontSize: '0.6rem',
  boxShadow: 'unset',

  [props.theme.breakpoints.up('sm')]: {
    minWidth: '30px',
  },
}));
