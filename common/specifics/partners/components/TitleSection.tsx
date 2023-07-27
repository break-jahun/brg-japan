import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  description: string;
}

const TitleSection = ({ title, description }: Props) => {
  return (
    <Box px={{ xs: '30px', sm: 0 }} mb="70px">
      <Box textAlign="center">
        <Typography
          sx={{
            marginBottom: { xs: '15px', sm: '14px' },
            fontSize: {
              xs: '22px',
              sm: '34px',
            },
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: '12px',
              sm: '16px',
            },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default TitleSection;
