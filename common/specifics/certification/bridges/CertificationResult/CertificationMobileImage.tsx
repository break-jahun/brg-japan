/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import { useState } from 'react';
import { FrontBackImageProps } from '@/specifics/certification/bridges/GuidelineSection/DesktopFrontBackImage';
import ItemImageModal from '@/common/bridges/ImageModal/ItemImageModal';
import useOpen from '@/common/modules/hooks/useOpen';

const CertificationMobileImage = ({
  frontImage,
  backImage,
}: FrontBackImageProps) => {
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
        gap: '28px',
        width: '100%',
      }}
    >
      {frontImage && (
        <ImageSection
          src={frontImage}
          handleOpenImageModal={handleOpenImageModal}
        />
      )}
      {backImage && (
        <ImageSection
          src={backImage}
          handleOpenImageModal={handleOpenImageModal}
        />
      )}
      <ItemImageModal isOpen={isOpen} handleClose={handleClose} src={src} />
    </Box>
  );
};

export default CertificationMobileImage;

interface ImageSectionProp {
  src: string;
  handleOpenImageModal: (imgSrc: string) => void;
}

const ImageSection = ({ src, handleOpenImageModal }: ImageSectionProp) => {
  return (
    <Box onClick={() => handleOpenImageModal(src)}>
      <img width="100%" src={src} alt="card_image" />
    </Box>
  );
};
