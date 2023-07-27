/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface DesktopLabelFrontBackImageProps {
  frontImage: string;
  backImage: string;
}

function DesktopLabelFrontBackImage({
  frontImage,
  backImage,
}: DesktopLabelFrontBackImageProps) {
  const { t } = useTranslation();
  return (
    <Box
      width={1}
      display="flex"
      justifyContent="space-between"
      marginBottom="40px"
    >
      <ImageSection direction={t('앞면')} src={frontImage} />
      <ImageSection direction={t('뒷면')} src={backImage} />
    </Box>
  );
}

export default DesktopLabelFrontBackImage;

interface ImageSectionProps {
  direction: string;
  src: string;
}

const ImageSection = ({ direction, src }: ImageSectionProps) => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        align="center"
        fontWeight={700}
        marginBottom="16px"
      >
        {direction}
      </Typography>
      <img width="328px" src={src} alt="label_image" />
    </Box>
  );
};
