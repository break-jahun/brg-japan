import { useTranslation } from 'react-i18next';
import { Box, Typography, styled } from '@mui/material';
import { memo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const PrecautionContent = ({ children }: Props) => {
  const { t, i18n } = useTranslation();

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
          [theme.breakpoints.up('sm')]: {
            p: 1,
          },
        })}
      >
        <Image
          src={`/images/grading/precaution_image_${i18n.language}.png`}
          alt="precaution_image"
        />
      </Box>
      <Typography variant="caption" fontWeight={700}>
        {t('precaution-2')}
      </Typography>
      <Box
        sx={(theme) => ({
          width: '100%',
          padding: '4px 0',
          wordBreak: 'keep-all',
          textAlign: 'center',
          whiteSpace: 'pre-wrap',
          [theme.breakpoints.up('sm')]: {
            p: 1,
            width: '95%',
          },
        })}
      >
        <Typography variant="body2" fontWeight={700} color="#304ffe">
          {t('precaution-3')}
        </Typography>
        <br />
        <Typography variant="body2" fontWeight={700} color="#304ffe">
          {t('precaution-5')}
        </Typography>
        <br />
        <Typography variant="body2" fontWeight={700} color="#304ffe">
          {t('precaution-6')}
        </Typography>
        <br />
        <Typography variant="caption" component="p">
          {t('precaution-7')}
        </Typography>
        <Typography variant="caption" component="p">
          {t('precaution-8')}
        </Typography>
        <br />
        <Typography variant="caption">
          <p>{t('precaution-9')}</p>
        </Typography>
        <Typography variant="caption">
          <p>{t('precaution-10')}</p>
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default memo(PrecautionContent);

const Image = styled('img')(({ theme }) => ({
  width: '120%',
  [theme.breakpoints.up('sm')]: {
    width: 700,
  },
}));
