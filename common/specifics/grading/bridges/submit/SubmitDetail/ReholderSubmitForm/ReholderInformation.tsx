import {
  Typography,
  Box,
  IconButton,
  Button,
  Tooltip,
  ClickAwayListener,
  styled,
} from '@mui/material';
import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { LocaleType } from '@/common/types/common';

interface Props {
  onClose: () => void;
}

function ReholderInformation({ onClose }: Props) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '95vw', sm: '650px' },
        backgroundColor: '#fff',
        padding: '12px 12px',
      }}
    >
      <HStack justifyContent="space-between">
        <div />
        <Title variant="h6">{t('grading/submit/standard-guide')}</Title>
        <IconButton sx={{ padding: 0 }} onClick={onClose}>
          <CloseIcon sx={{ color: 'black' }} />
        </IconButton>
      </HStack>
      <Box overflow="auto" maxHeight="70vh">
        <VStack marginTop={3}>
          <Description variant="body2">{t('리홀더서비스설명')}</Description>
          <Description variant="body2">{t('리홀더목적')}</Description>
          <Description variant="body2">{t('리홀더그레이딩미진행')}</Description>
          <Description variant="body2">{t('리홀더서비스방식')}</Description>
          <Description variant="body2">{t('리홀더표기변경안내')}</Description>
        </VStack>
      </Box>
      <HStack marginTop={3}>
        <Button
          type="submit"
          variant="contained"
          sx={{ fontWeight: 700, margin: 'auto' }}
          onClick={onClose}
        >
          {t('general/accept')}
        </Button>
      </HStack>
    </Box>
  );
}

const Title = styled(Typography)({
  fontWeight: 700,
});

const BaseText = styled(Typography)({
  fontWeight: 700,
});

const Description = styled(BaseText)({
  color: '#f44336',
  lineHeight: 2,
});

export default ReholderInformation;
