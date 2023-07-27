import { isServiceAgreementCheckedState } from '@/common/modules/recoil/gradingOrder';
import { Box, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import GradingTermsOfService from './GradingTermsOfService';

const TermsOfServiceAgreement = () => {
  const { t } = useTranslation();
  const [isServiceAgreementChecked, setIsServiceAgreementChecked] =
    useRecoilState(isServiceAgreementCheckedState);

  const handleChange = () => {
    setIsServiceAgreementChecked(!isServiceAgreementChecked);
  };

  return (
    <Box
      py={1}
      display="flex"
      alignItems="center"
      flexDirection="column"
      width={1}
    >
      <Typography variant="body2" fontWeight={700}>
        {t('payment-12')}
      </Typography>
      <GradingTermsOfService />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={1}
        m={1}
        style={{
          backgroundColor: '#f0f0f0',
          width: '100%',
        }}
      >
        <Typography variant="caption">{t('payment-13')}</Typography>
      </Box>
      <FormControlLabel
        sx={{ mr: 0 }}
        control={
          <Checkbox
            checked={isServiceAgreementChecked}
            onChange={handleChange}
            name="checkedA"
            color="secondary"
            size="small"
          />
        }
        label={
          <Typography variant="caption" fontWeight={700}>
            {t('payment-14')}
          </Typography>
        }
      />
    </Box>
  );
};

export default memo(TermsOfServiceAgreement);
