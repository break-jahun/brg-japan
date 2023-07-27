/* eslint-disable @next/next/no-img-element */
import { Box, SxProps, Typography } from '@mui/material';
import { FrontBackImageProps } from '@/specifics/certification/bridges/GuidelineSection/DesktopFrontBackImage';
import { useTranslation } from 'react-i18next';
import useOpen from '@/common/modules/hooks/useOpen';
import { useState } from 'react';
import ItemImageModal from '@/common/bridges/ImageModal/ItemImageModal';

const CertificationDesktopImage = ({
  frontImage,
  backImage,
}: FrontBackImageProps) => {
  const { t } = useTranslation();
  const [src, setSrc] = useState('');
  const { open: isOpen, handleOpen, handleClose } = useOpen();

  const handleOpenImageModal = (imgSrc?: string) => {
    if (!imgSrc) {
      return;
    }
    setSrc(imgSrc);
    handleOpen();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '40px',
        justifyContent: 'space-between',
        textAlign: 'center',
        width: '100%',
        maxWidth: '912px',
      }}
    >
      {frontImage && (
        <ImageSection
          direction="Front"
          src={frontImage}
          sx={{ marginRight: '48px' }}
          handleOpenImageModal={handleOpenImageModal}
        />
      )}
      {backImage && (
        <ImageSection
          direction="Back"
          src={backImage}
          handleOpenImageModal={handleOpenImageModal}
        />
      )}
      <ItemImageModal isOpen={isOpen} handleClose={handleClose} src={src} />
    </Box>
  );
};

export default CertificationDesktopImage;

interface ImageSectionProp {
  direction: 'Front' | 'Back';
  src: string;
  sx?: SxProps;
  handleOpenImageModal: (imgSrc: string) => void;
}

const ImageSection = ({
  direction,
  src,
  sx,
  handleOpenImageModal,
}: ImageSectionProp) => {
  return (
    <Box sx={sx}>
      <Box sx={{ marginBottom: '24px' }}>
        <Typography variant="subtitle1">{direction}</Typography>
      </Box>
      <Box onClick={() => handleOpenImageModal(src)}>
        <img width="328px" src={src} alt="card_image" />
      </Box>
    </Box>
  );
};
