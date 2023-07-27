import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  index: number;
  description: string;
}

const BenefitItem = ({ index, description }: Props) => {
  const dotList = [...Array(index + 1)];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingX: { xs: '16px', sm: '32px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '4px',
          marginBottom: '4px',
        }}
      >
        {dotList.map((item, itemIndex) => (
          <Box
            // eslint-disable-next-line react/no-array-index-key
            key={itemIndex}
            sx={{
              width: '4px',
              height: '4px',
              backgroundColor: 'secondary_20',
              borderRadius: '50%',
            }}
          />
        ))}
      </Box>
      <Box sx={{ textAlign: 'center', maxWidth: '704px' }}>
        <Typography fontWeight={600} color="secondary_20" variant="body1">
          brg
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
};

export default BenefitItem;
