import { Box, styled } from '@mui/material';

interface PartnerShopItemProps {
  src: string;
}

const PartnerShopSliderItem = ({ src }: PartnerShopItemProps) => {
  return (
    <Box
      sx={{
        margin: { xs: '8px', sm: '16px 12px' },
        width: { xs: '96px', sm: '158px' },
        height: { xs: '96px', sm: '158px' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px',
        boxShadow:
          '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        filter: 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))',
      }}
    >
      <StyledImg src={src} />
    </Box>
  );
};

const StyledImg = styled('img')(({ theme }) => ({
  width: '72px',

  [theme.breakpoints.up('sm')]: {
    width: '118.5px',
  },
}));

export default PartnerShopSliderItem;
