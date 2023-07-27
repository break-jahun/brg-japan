import { HStack } from '@/common/components/HStack';
import { Button, Stack, styled, Typography } from '@mui/material';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { GradingSubmitType } from '@/common/types/grading/gradingOrder';
import { useTranslation } from 'react-i18next';
import { gradingSubmitTypeState } from '@/specifics/grading/modules/recoil/apply';
import { VStack } from '@/common/components/VStack';
import { reholderCardListState } from '@/common/modules/recoil/reholder';

interface Props {
  showReholderButton?: boolean;
}

function SubmitTypeButtonGroup({ showReholderButton }: Props) {
  const { t } = useTranslation();

  const [submitType, setSubmitType] = useRecoilState(gradingSubmitTypeState);
  const resetReholderCardList = useResetRecoilState(reholderCardListState);

  const handleClick = (newSubmitType: GradingSubmitType) => {
    if (submitType !== newSubmitType) {
      setSubmitType(newSubmitType);
    }
  };

  return (
    <Stack gap="2rem" direction={{ xs: 'column', sm: 'row' }} marginTop="10px">
      <VStack>
        <Typography variant="h6" fontWeight={700}>
          {t('submit-21')}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} gap="1rem">
          <ApplicationButton
            isActive={submitType === 'GENERAL'}
            onClick={() => {
              handleClick('GENERAL');
            }}
          >
            {t('submit-22')}
          </ApplicationButton>
          <ApplicationButton
            isActive={submitType === 'SIMPLE'}
            onClick={() => {
              handleClick('SIMPLE');
            }}
          >
            {t('submit-23')}
          </ApplicationButton>
        </Stack>
      </VStack>
      {showReholderButton && (
        <VStack>
          <Typography variant="h6" fontWeight={700}>
            {t('general/reholder')}
          </Typography>
          <ReholderApplicationButton
            isActive={submitType === 'REHOLDER'}
            onClick={() => {
              handleClick('REHOLDER');
              resetReholderCardList();
            }}
          >
            {t('general/reholder-order')}
          </ReholderApplicationButton>
        </VStack>
      )}
    </Stack>
  );
}

export default SubmitTypeButtonGroup;

const CommonApplicationButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  padding: '6px 30px',
  boxSizing: 'border-box',
  fontWeight: 800,
  letterSpacing: 2,
}));

const ApplicationButton = styled(CommonApplicationButton, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  color: isActive ? 'white' : 'black',
  border: '2px solid black',
  backgroundColor: isActive ? 'black' : 'white',
  ':hover': {
    backgroundColor: isActive ? 'black' : 'white',
  },
}));

const ReholderApplicationButton = styled(CommonApplicationButton, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive, theme }) => ({
  color: isActive ? 'white' : theme.palette.primary.main,
  border: `2px solid ${theme.palette.primary.main}`,
  backgroundColor: isActive ? theme.palette.primary.main : 'white',
  ':hover': {
    backgroundColor: isActive ? theme.palette.primary.main : 'white',
  },
}));
