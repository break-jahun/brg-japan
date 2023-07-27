import { useTranslation } from 'react-i18next';
import { Box, Typography, styled } from '@mui/material';
import { memo } from 'react';

const ReholderPrecautionContent = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 3,
        backgroundColor: '#fafafa',
      }}
    >
      <Box
        sx={(theme) => ({
          width: '100%',
          padding: '4px 0',
          [theme.breakpoints.up('sm')]: {
            p: 1,
            width: '95%',
          },
        })}
      >
        <CautionText variant="body2" fontWeight={700} color="#304ffe">
          {t('포장후발송')}
        </CautionText>
      </Box>
    </Box>
  );
};

export default memo(ReholderPrecautionContent);

const CautionText = styled(Typography)({
  wordBreak: 'keep-all',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
}) as typeof Typography;
