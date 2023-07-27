import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface Props {
  title: string;
  description: string;
}

const AccountFormText = ({ title, description }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography fontWeight={600} variant={isMobile ? 'h4' : 'h3'}>
        {title}
      </Typography>
      <Typography
        variant="caption"
        whiteSpace="pre-line"
        sx={{
          maxWidth: { sm: '328px' },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default AccountFormText;
