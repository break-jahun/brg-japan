import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FooterCompanyInfo = () => {
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <Typography variant="caption" component="p">
        {t('Footer-8')}
      </Typography>
      <Typography variant="caption" component="p">
        {t('Footer-9')}
      </Typography>
      <Typography variant="caption" component="p">
        {t('회사주소')}
      </Typography>
      <Typography variant="caption" component="p">
        {t('회사연락메일')}
      </Typography>
      <Typography variant="caption" component="p">
        {t('회사번호')}
      </Typography>
      <Typography variant="caption" component="p">
        {t('Footer-10')}
      </Typography>
      <Typography variant="caption" component="p">
        {t('Footer-11')}
      </Typography>
      <Typography variant="caption" component="p" marginTop="24px">
        © 2023 BREAK & COMPANY Inc. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterCompanyInfo;
