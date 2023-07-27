import usePhoneAuthModalParser from '@/specifics/auth/modules/hooks/parser/usePhoneAuthModalParser';
import { Box, Typography } from '@mui/material';

const PhoneAuthModalHeader = () => {
  const { title, notice1, notice2, notice3 } = usePhoneAuthModalParser();

  return (
    <>
      <Box p={1}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box
        sx={{
          margin: 1,
          padding: 1,

          backgroundColor: '#fafafa',
          borderRadius: '5px',
        }}
      >
        <Typography variant="body2" fontWeight="bold" align="center">
          {notice1}
        </Typography>
        <Typography variant="body2" align="center">
          {notice2}
        </Typography>
        <Typography variant="body2" align="center">
          {notice3}
        </Typography>
      </Box>
    </>
  );
};

export default PhoneAuthModalHeader;
