import useDateUtils from '@/common/modules/hooks/useDateUtils';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import { Box, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  updatedAt: GradingOrderAttributes['updatedAt'];
}

const SavedDate = ({ updatedAt }: Props) => {
  const { i18n } = useTranslation();

  return i18n.language === 'en' ? (
    <EnSavedDate updatedAt={updatedAt} />
  ) : (
    <KrSavedDate updatedAt={updatedAt} />
  );
};

export default SavedDate;

const EnSavedDate = ({ updatedAt }: Props) => {
  const { t } = useTranslation();
  const { getDateWithYMDHm } = useDateUtils();

  return (
    <Box
      sx={{
        width: '60%',
      }}
    >
      <SavedDateContainer>
        <SavedDateText>{getDateWithYMDHm(updatedAt ?? '')}</SavedDateText>
        <SavedDateText>{t('temporary-storage/save-success')}</SavedDateText>
      </SavedDateContainer>
    </Box>
  );
};

const KrSavedDate = ({ updatedAt }: Props) => {
  const { t } = useTranslation();
  const { getDateWithYMDHm } = useDateUtils();

  return (
    <SavedDateContainer>
      <SavedDateText>
        {getDateWithYMDHm(updatedAt ?? '')}
        {t('temporary-storage/save-success')}
      </SavedDateText>
    </SavedDateContainer>
  );
};

const SavedDateContainer = styled(Box)(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    marginRight: '50px',
  },
}));

const SavedDateText = styled(Typography)(({ theme }) => ({
  color: '#4e5996',
  fontWeight: 700,
  fontSize: '14px',

  [theme.breakpoints.up('sm')]: {
    fontSize: '16px',
  },
}));
