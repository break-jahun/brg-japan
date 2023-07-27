import { Box, Typography } from '@mui/material';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import useOrdererInformationTableBodyParser from '@/specifics/grading/modules/hooks/parser/useOrdererInformationTableBodyParser';

const OrdererInformationTableBody = () => {
  const { data } = useGetUserInfoQuery();
  const { userName, userNumber, requiredSelfCertification } =
    useOrdererInformationTableBodyParser(data);

  const isAuthorized = data?.isAuthorized && data?.mbPhone;

  return (
    <Box py={1}>
      {isAuthorized ? (
        <Box display="flex" flexDirection="column">
          <Typography variant="body2" gutterBottom>
            {userName}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {userNumber}
          </Typography>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="caption">
            <b style={{ color: 'red' }}>*</b>
            {requiredSelfCertification}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default OrdererInformationTableBody;
