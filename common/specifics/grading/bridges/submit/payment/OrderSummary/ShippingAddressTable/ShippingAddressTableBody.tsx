import { Box, Typography } from '@mui/material';
import useShippingAddressTableBodyParser from '@/specifics/grading/modules/hooks/parser/useShippingAddressTableBodyParser';
import { shippingAddressState } from '@/common/modules/recoil/address';
import { useRecoilState } from 'recoil';
import { useAddressListQuery } from '@/common/modules/hooks/useAddressQuery';
import { jejuVerification } from '@/specifics/grading/modules/utils/addressUtils';
import NoAddressContent from './NoAddressContent';

const ShippingAddressTableBody = () => {
  const [shippingAddress, setShippingAddress] =
    useRecoilState(shippingAddressState);
  const { title, address, memo, receiver, jejuGuide } =
    useShippingAddressTableBodyParser(shippingAddress);

  useAddressListQuery({
    onSuccess: (response) => {
      if (!shippingAddress) {
        const defaultAddress = response.find((item) => item.isDefault) || null;

        setShippingAddress(defaultAddress);
      }
    },
  });

  if (!shippingAddress) {
    return <NoAddressContent />;
  }

  return (
    <Box py={1}>
      <Box display="flex" flexDirection="column">
        <Typography variant="body2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {address}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {receiver}
        </Typography>
        <Typography variant="body2">{memo}</Typography>
      </Box>
      {jejuVerification(shippingAddress) && (
        <Box mt={1}>
          <Typography variant="caption">
            <b style={{ color: 'red' }}>*</b>
            {jejuGuide}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ShippingAddressTableBody;
