/* eslint-disable @next/next/no-img-element */
import { Box, styled, Typography } from '@mui/material';
import { ReactChild, useState } from 'react';
import { FrontBackImageProps } from '@/specifics/certification/bridges/GuidelineSection/DesktopFrontBackImage';
import { useTranslation } from 'react-i18next';

const MobileFrontBackImage = ({
  frontImage,
  backImage,
  imageHeight,
}: FrontBackImageProps & {
  imageHeight: string;
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('front');

  return (
    <Box
      sx={{
        marginTop: '41px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '292px',
        }}
      >
        {frontImage && (
          <ContentToggleButton
            isActive={value === 'front'}
            onClick={() => {
              setValue('front');
            }}
          >
            Front
          </ContentToggleButton>
        )}
        {backImage && (
          <ContentToggleButton
            isActive={value === 'back'}
            onClick={() => {
              setValue('back');
            }}
          >
            Back
          </ContentToggleButton>
        )}
      </Box>
      <Box
        sx={{
          marginTop: '32px',
          position: 'relative',
          height: imageHeight,
          width: '328px',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
          transform: value === 'front' ? '' : 'rotateY(180deg)',
        }}
      >
        {frontImage && <FrontImg alt="card_image" src={frontImage} />}
        {backImage && <BackImg alt="card_image" src={backImage} />}
      </Box>
    </Box>
  );
};

export default MobileFrontBackImage;

const FrontImg = styled('img')({
  width: '328px',
  position: 'absolute',
  top: 0,
  left: 0,
  WebkitBackfaceVisibility: 'hidden',
  backfaceVisibility: 'hidden',
});

const BackImg = styled(FrontImg)({
  transform: 'rotateY(180deg)',
});

interface ContentToggleButtonProps {
  isActive: boolean;
  children: ReactChild;
  onClick: () => void;
}

const ContentToggleButton = ({
  isActive,
  children,
  onClick,
}: ContentToggleButtonProps) => {
  return (
    <Box
      onClick={onClick}
      sx={(theme) => ({
        textAlign: 'center',
        flexBasis: '50%',
        padding: '10px',
        borderBottom: isActive
          ? `2px solid ${theme.palette.secondary_30}`
          : '1px solid rgba(0, 0, 0, 0.12);',
        color: isActive ? 'secondary_30' : 'gray_600',
      })}
    >
      <Typography variant="button">{children}</Typography>
    </Box>
  );
};
