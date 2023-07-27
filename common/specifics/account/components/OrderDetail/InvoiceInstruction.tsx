import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const InvoiceInstruction = () => {
  const { t } = useTranslation();
  const instruction1 = t('orderID-32');
  const instruction2 = t('orderID-33');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Box display="flex" my={1}>
        <Typography variant="body2">{instruction1}</Typography>
      </Box>
      <Box display="flex" my={1}>
        <Typography
          variant="body2"
          style={{
            color: 'red',
            fontWeight: 700,
            whiteSpace: isMobile ? 'pre-wrap' : 'inherit',
          }}
        >
          {instruction2}
        </Typography>
      </Box>
    </>
  );
};
export default InvoiceInstruction;
