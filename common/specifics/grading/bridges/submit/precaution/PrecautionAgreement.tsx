import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';

interface Props {
  isChecked: boolean;
  onChange: () => void;
}

const PrecautionAgreement = ({ isChecked, onChange }: Props) => {
  const { t } = useTranslation();

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={onChange}
          color="primary"
          size="small"
        />
      }
      label={
        <Typography variant="caption" fontWeight="700">
          {t('precaution-12')}
        </Typography>
      }
    />
  );
};

export default PrecautionAgreement;
