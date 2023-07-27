/* eslint-disable react/no-unused-prop-types */
import { AffiliatedShopAttributes } from '@/common/types/affiliatedShop';
import GoogleMapReact from 'google-map-react';
import { useTranslation } from 'react-i18next';
import Room from '@mui/icons-material/Room';
import { Box } from '@mui/material';

interface Props {
  selectedShop: AffiliatedShopAttributes | null;
}

const PartnerShopMap = ({ selectedShop }: Props) => {
  const { i18n } = useTranslation();

  const latitude = selectedShop?.latitude || 0;
  const longitude = selectedShop?.longitude || 0;

  if (!latitude || !longitude) {
    return null;
  }

  return (
    <Box
      sx={{
        height: { xs: '494px', sm: '500px' },
        marginTop: { xs: '16px', sm: '24px' },
        paddingX: { sm: '32px' },
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`,
          language: i18n.language,
        }}
        center={{
          lat: latitude,
          lng: longitude,
        }}
        defaultZoom={13}
      >
        <Marker lat={latitude} lng={longitude} />
      </GoogleMapReact>
    </Box>
  );
};

export default PartnerShopMap;

interface IconProp {
  lat: number;
  lng: number;
}

const Marker = (props: IconProp) => {
  return (
    <Room
      sx={{
        position: 'absolute',
        color: '#DC0000',
      }}
    />
  );
};
