import { Box, Typography, Button } from '@mui/material';
import { useRecoilValue } from 'recoil';
import useShippingAddressTableHeaderParser from '@/specifics/grading/modules/hooks/parser/useShippingAddressTableHeaderParser';
import { shippingAddressState } from '@/common/modules/recoil/address';
import { AddressAttributes } from '@/common/types/user/address';

interface Props {
  handleOpen: () => void;
  address: AddressAttributes | null;
}

const AddressTableHeader = ({ handleOpen, address }: Props) => {
  const { generalAddress, buttonText } =
    useShippingAddressTableHeaderParser(address);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={1}
    >
      <Typography variant="body2" fontWeight={700}>
        {generalAddress}
      </Typography>
      <Button disableElevation size="small" variant="text" onClick={handleOpen}>
        <Typography color="#304ffe" variant="caption" fontWeight={700}>
          {buttonText}
        </Typography>
      </Button>
    </Box>
  );
};

export default AddressTableHeader;
