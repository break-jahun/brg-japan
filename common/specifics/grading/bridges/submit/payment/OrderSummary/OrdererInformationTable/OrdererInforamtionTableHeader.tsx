import { Box, Typography, Button } from '@mui/material';

import useOrdererInformationTableHeaderParser from '@/specifics/grading/modules/hooks/parser/useOrdererInformationTableHeaderParser';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import useModal from '@/common/modules/hooks/useModal';
import PhoneNumberAuthenticationModal from '@/common/bridges/PhoneAuthenticationModal';

const OrdererInformationTableHeader = () => {
  const { data } = useGetUserInfoQuery();
  const { orderPersonInfo, buttonText } =
    useOrdererInformationTableHeaderParser(data);
  const { isOpen, handleClose, handleOpen } = useModal();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={1}
      >
        <Typography variant="body2" fontWeight={700}>
          {orderPersonInfo}
        </Typography>
        <Button
          disableElevation
          size="small"
          variant="text"
          onClick={handleOpen}
        >
          <Typography color="#304ffe" variant="caption" fontWeight={700}>
            {buttonText}
          </Typography>
        </Button>
      </Box>
      <PhoneNumberAuthenticationModal
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default OrdererInformationTableHeader;
