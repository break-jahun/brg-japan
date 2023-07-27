import { Box } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import Room from '@mui/icons-material/Room';

type Props = {
  latitude: number;
  longitude: number;
};

function GoogleMapSection(props: Props) {
  const { latitude, longitude } = props;

  return (
    <Box
      sx={{
        height: { xs: '494px', sm: '500px' },
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`,
          language: 'ja',
        }}
        center={{
          lat: latitude,
          lng: longitude,
        }}
        defaultZoom={15}
      >
        <Room
          sx={{
            position: 'absolute',
            color: '#DC0000',
          }}
        />
      </GoogleMapReact>
    </Box>
  );
}

export default GoogleMapSection;
