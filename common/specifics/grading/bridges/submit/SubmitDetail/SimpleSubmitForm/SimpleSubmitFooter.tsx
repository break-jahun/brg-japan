import { Checkbox, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { VStack } from '@/common/components/VStack';
import { HStack } from '@/common/components/HStack';
import { useTranslation } from 'react-i18next';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { imageIdsState } from '@/common/modules/recoil/image';
import { gradingOrderState } from '@/common/modules/recoil/gradingOrder';
import { ChangeEvent } from 'react';

const SimpleSubmitFooter = () => {
  const { t } = useTranslation();
  const imageIds = useRecoilValue(imageIdsState);
  const setGradingOrder = useSetRecoilState(gradingOrderState);

  const handleChangeMinGrade = (
    event: ChangeEvent<HTMLInputElement>,
    isChecked: boolean
  ) => {
    setGradingOrder((prev) => ({ ...prev, noMinGradeAgreement: isChecked }));
  };

  const handleChangePhotoMatch = (
    event: ChangeEvent<HTMLInputElement>,
    isChecked: boolean
  ) => {
    setGradingOrder((prev) => ({ ...prev, photoUploadAgreement: isChecked }));
  };

  return (
    <VStack alignItems="center" mt={2}>
      <HStack>
        <Typography color="red">*</Typography>
        <DescriptionGray variant="caption">
          {t('grading/order/sent-photo-upload')}
        </DescriptionGray>
      </HStack>
      <DescriptionGray variant="caption">
        {t('grading/order/must-match')}
      </DescriptionGray>
      <DescriptionGray variant="caption">
        {t('grading/order/recommend-sheet')}
      </DescriptionGray>
      <Description variant="h6" mt={1}>
        {t('grading/order/photo-complete')} {imageIds.length}
        {t('general/a-sheet')}
      </Description>
      <HStack alignItems="center">
        <Checkbox size="small" onChange={handleChangeMinGrade} />
        <Typography variant="body2">
          {t('grading/order/no-mingrade')}
        </Typography>
      </HStack>
      <HStack alignItems="center">
        <Checkbox size="small" onChange={handleChangePhotoMatch} />
        <Typography variant="body2">{t('grading/order/is-matched')}</Typography>
      </HStack>
      <HStack alignItems="center" marginLeft="auto">
        <Description variant="body1">{t('grading/order/entire')}</Description>
        <Description variant="h4" ml={1}>
          {imageIds.length} {t('general/a-sheet')}
        </Description>
      </HStack>
    </VStack>
  );
};

export default SimpleSubmitFooter;

const Description = styled(Typography)({
  fontWeight: 700,
  lineHeight: 2,
});

const DescriptionGray = styled(Typography)({
  color: '#717171',
  letterSpacing: 0.5,
  lineHeight: 1.5,
});
