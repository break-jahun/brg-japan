import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
  desc: string;
}

const DifferentiatorCard = ({ title, desc }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        color: 'white',
        flexBasis: '328px',
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="body1">{desc}</Typography>
    </Box>
  );
};

export default DifferentiatorCard;
