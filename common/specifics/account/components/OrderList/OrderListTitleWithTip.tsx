import { useTranslation } from 'react-i18next';
import { Box, Tooltip, Typography } from '@mui/material';

function OrderListTitleWithTip() {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="row" gap="10px" alignItems="center">
      <Typography variant="body1" color="gray_700">
        {t('orderList-1')}
      </Typography>
      <Tooltip
        enterTouchDelay={0}
        placement="bottom-start"
        title={`${t('orderList-2')}`}
      >
        <Box
          bgcolor="black"
          color="white"
          fontWeight={900}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={(theme) => ({
            width: 14,
            height: 14,
            borderRadius: 7,
            fontSize: 10,
            [theme.breakpoints.up('sm')]: {
              width: 20,
              height: 20,
              borderRadius: 10,
              fontSize: 14,
            },
          })}
        >
          ?
        </Box>
      </Tooltip>
    </Box>
  );
}

export default OrderListTitleWithTip;
