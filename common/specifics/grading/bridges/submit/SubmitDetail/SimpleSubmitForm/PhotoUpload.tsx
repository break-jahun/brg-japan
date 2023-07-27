import { Box, Button, IconButton, styled, Typography } from '@mui/material';
import { HStack } from '@/common/components/HStack';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import { useRecoilState } from 'recoil';
import { imagesState } from '@/common/modules/recoil/image';
import { useUploadImageMutation } from '@/specifics/grading/modules/hooks/useUploadImageMutation';

interface Props {
  onClose: () => void;
}

function PhotoUpload({ onClose }: Props) {
  const { t } = useTranslation();
  const [images, setImages] = useRecoilState(imagesState);

  const { mutate: uploadImage } = useUploadImageMutation();

  const isExistFileIds = images.length > 0;

  const handleDropAccpeted = useCallback(
    (files: File[], event: DropEvent) => {
      if (files?.length > 0) {
        uploadImage(files[0]);
      }
    },
    [uploadImage]
  );

  const handleDropRejected = useCallback(
    (files: FileRejection[], event: DropEvent) => {},
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted: handleDropAccpeted,
    onDropRejected: handleDropRejected,
    accept: {
      'image/*': [],
    },
    maxSize: 1024 * 1024 * 10,
    maxFiles: 100,
  });

  const handleDeleteImage = useCallback(
    (event) => {
      setImages((prev) =>
        prev.filter((item) => item.id !== Number(event.currentTarget.id))
      );
    },
    [setImages]
  );

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '95vw', sm: '95vw', md: 650 },
        backgroundColor: '#fff',
        padding: '12px 24px',
      }}
    >
      <HStack justifyContent="space-between">
        <div />
        <Title variant="body1">{t('photo-upload/card')}</Title>
        <IconButton sx={{ padding: 0 }} onClick={onClose}>
          <CloseIcon sx={{ color: 'black' }} />
        </IconButton>
      </HStack>
      <HStack justifyContent="center" mt={2}>
        <Typography variant="caption" letterSpacing={0.5}>
          현재 <NumberText>{images.length}</NumberText>장의 사진이
          업로드되었습니다.
        </Typography>
      </HStack>
      {isExistFileIds && (
        <PreviewImageBox>
          {images.map((image) => (
            <ImageWrapper key={image.id}>
              <Image src={image.url} alt="preview" />
              <IconButton
                id={`${image.id}`}
                sx={{
                  padding: 0,
                  position: 'absolute',
                  top: -7,
                  right: -7,
                  backgroundColor: 'white',
                }}
                onClick={handleDeleteImage}
              >
                <CloseIcon sx={{ color: 'black' }} />
              </IconButton>
            </ImageWrapper>
          ))}
        </PreviewImageBox>
      )}
      <FileDropBox
        justifyContent="center"
        alignItems="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Typography variant="body2" fontWeight={700} color="system_blue">
          {t('photo-upload/guidance-6')}
        </Typography>
        <Typography variant="caption" color="gray_7" fontWeight={500} mt={1}>
          {t('photo-upload/guidance-7')}
        </Typography>
        <Typography variant="caption" color="gray_7" fontWeight={500}>
          {t('photo-upload/guidance-8')}
        </Typography>
      </FileDropBox>
      {isExistFileIds && (
        <HStack mt={2}>
          <Button
            variant="contained"
            sx={{ fontWeight: 700, margin: 'auto' }}
            onClick={onClose}
          >
            {t('general/upload-complete')}
          </Button>
        </HStack>
      )}
    </Box>
  );
}

const Title = styled(Typography)({
  fontWeight: 700,
});

const NumberText = styled('span')({
  fontWeight: 800,
  fontSize: 24,
});

const FileDropBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid rgb(217, 217, 217)',
  padding: '30px 5px',
  marginTop: 8,
  cursor: 'pointer',
  borderRadius: 4,
});

const PreviewImageBox = styled(Box)({
  padding: 8,
  border: '1px solid rgb(217, 217, 217)',
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'auto',
  borderRadius: 4,
});

const ImageWrapper = styled(Box)({
  marginRight: 8,
  position: 'relative',
});

const Image = styled('img')({
  width: 100,
});

export default PhotoUpload;
