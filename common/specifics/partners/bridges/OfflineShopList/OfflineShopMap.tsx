/* eslint-disable react/no-unused-prop-types */
import { AffiliatedShopAttributes } from '@/common/types/affiliatedShop';
import GoogleMapReact from 'google-map-react';
import { useTranslation } from 'react-i18next';
import Room from '@mui/icons-material/Room';

interface Props {
  selectedOfflineShop: AffiliatedShopAttributes;
}

const OfflineShopMap = ({ selectedOfflineShop }: Props) => {
  const { i18n } = useTranslation();

  const latitude = selectedOfflineShop.latitude || 0;
  const longitude = selectedOfflineShop.longitude || 0;

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`,
        language: i18n.language,
        region: 'KR',
      }}
      defaultCenter={{
        lat: latitude,
        lng: longitude,
      }}
      center={{
        lat: latitude,
        lng: longitude,
      }}
      defaultZoom={13}
    >
      <Marker lat={latitude} lng={longitude} />
    </GoogleMapReact>
  );
};

export default OfflineShopMap;

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
