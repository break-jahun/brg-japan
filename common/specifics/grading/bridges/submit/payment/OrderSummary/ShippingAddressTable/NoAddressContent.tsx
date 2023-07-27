import useNoAddressParser from '@/specifics/grading/modules/hooks/parser/useNoAddressContentParser';
import { Box, Typography } from '@mui/material';

const NoAddressContent = () => {
  const { addressJeju, addressNotRegistered } = useNoAddressParser();

  return (
    <Box m={1}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box>
          <Typography variant="caption" color="red" fontWeight={700}>
            *
          </Typography>
          <Typography variant="caption">{addressNotRegistered}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="red" fontWeight={700}>
            *
          </Typography>
          <Typography variant="caption">{addressJeju}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NoAddressContent;
