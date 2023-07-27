import { Typography, Box, IconButton, Button, styled } from '@mui/material';
import { HStack } from '@/common/components/HStack';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { LocaleType } from '@/common/types/common';
import { forwardRef } from 'react';

type ImageSrcData = {
  [key in LocaleType]: string;
};

const imageSrcData: ImageSrcData = {
  ko: '/images/grading/submit_standard.png',
  en: '/images/grading/submit_standard_en.png',
  tw: '/images/grading/submit_standard_tw.png',
};

interface Props {
  onClose: () => void;
  tooltipGroup: JSX.Element;
  description: JSX.Element;
}

const SizeInformation = forwardRef(
  ({ onClose, tooltipGroup, description }: Props, ref) => {
    const { t, i18n } = useTranslation();

    return (
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95vw', sm: '650px' },
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px',
        }}
      >
        <HStack justifyContent="space-between">
          <div />
          <Typography fontWeight={700} variant="h6">
            {t('submit-1')}
          </Typography>
          <IconButton sx={{ padding: 0 }} onClick={onClose}>
            <CloseIcon sx={{ color: 'black' }} />
          </IconButton>
        </HStack>
        <Box overflow="auto" maxHeight="70vh">
          <ImageWrapper>
            <Image
              src={imageSrcData[i18n.language as LocaleType]}
              alt="신청 가능한 카드 사이즈"
            />
          </ImageWrapper>
          <HStack
            marginTop={1}
            sx={{
              justifyContent: 'space-around',
              wordBreak: 'keep-all',
              gap: '8px',
            }}
          >
            {tooltipGroup}
          </HStack>
          {description}
        </Box>
        <HStack marginTop={3}>
          <Button
            type="submit"
            variant="contained"
            sx={{ fontWeight: 700, margin: 'auto' }}
            onClick={onClose}
          >
            {t('submit-18')}
          </Button>
        </HStack>
      </Box>
    );
  }
);

const ImageWrapper = styled(Box)({
  padding: 2,
  marginTop: 16,
});

const Image = styled('img')({
  width: '100%',
});

export default SizeInformation;
