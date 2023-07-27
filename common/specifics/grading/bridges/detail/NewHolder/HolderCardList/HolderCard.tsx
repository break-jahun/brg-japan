import { Box, Typography } from '@mui/material';

interface Props {
  background: string;
  title: string;
  desc: string;
}

const HolderCard = ({ background, title, desc }: Props) => {
  return (
    <Box
      sx={{
        padding: '24px 16px',
        width: '328px',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        borderRadius: '8px',
        height: '332px',
        background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body1">{desc}</Typography>
      </Box>
    </Box>
  );
};

export default HolderCard;
