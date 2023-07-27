/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface FrontBackImageProps {
  frontImage: string;
  backImage: string;
}

const DesktopFrontBackImage = ({
  frontImage,
  backImage,
}: FrontBackImageProps) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '44px',
        justifyContent: 'space-between',
        textAlign: 'center',
        width: '100%',
        maxWidth: '912px',
      }}
    >
      <ImageSection direction="Front" src={frontImage} />
      <ImageSection direction="Back" src={backImage} />
    </Box>
  );
};

export default DesktopFrontBackImage;

interface ImageSectionProp {
  direction: 'Front' | 'Back';
  src: string;
}

const ImageSection = ({ direction, src }: ImageSectionProp) => {
  return (
    <Box>
      <Box
        sx={{
          marginBottom: '20px',
        }}
      >
        <Typography variant="subtitle1">{direction}</Typography>
      </Box>
      <img width="328px" src={src} alt="card_image" />
    </Box>
  );
};
