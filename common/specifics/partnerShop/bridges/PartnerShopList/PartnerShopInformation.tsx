/* eslint-disable @next/next/no-img-element */
import { AffiliatedShopAttributes } from '@/common/types/affiliatedShop';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  selectedShop: AffiliatedShopAttributes | null;
}

const PartnerShopInformation = ({ selectedShop }: Props) => {
  const { t } = useTranslation();

  const address = selectedShop?.address ? selectedShop.address : t('partner-6');
  const number = selectedShop?.phone ? selectedShop.phone : t('partner-7');

  return (
    <Box
      sx={{
        marginTop: '16px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        backgroundColor: 'gray_100',
      }}
    >
      <Typography fontWeight={700} variant="subtitle1">
        {t('partner-5')}
      </Typography>
      <Box sx={{ minHeight: { xs: '72px', sm: '48px' } }}>
        <Typography
          variant="subtitle1"
          color={selectedShop?.address ? 'black' : 'gray_400'}
        >
          {address}
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        color={selectedShop?.phone ? 'black' : 'gray_400'}
      >
        {number}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <a href={selectedShop?.linkUrl} target="_blank" rel="noreferrer">
          <img
            src={
              selectedShop
                ? '/images/partnerShop/link_color.png'
                : '/images/partnerShop/link.png'
            }
            alt="link_icon"
            width={24}
          />
        </a>
      </Box>
    </Box>
  );
};

export default PartnerShopInformation;
