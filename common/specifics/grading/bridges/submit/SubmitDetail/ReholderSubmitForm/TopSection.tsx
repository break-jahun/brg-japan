import { Box, Button, styled, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TopSectionProps {
  serial: string;
  onOpenDialog: () => void;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onClick: () => void;
}

function TopSection(props: TopSectionProps) {
  const { serial, onOpenDialog, onChange, onClick } = props;

  const { t } = useTranslation();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <Box>
      <Box mt={2}>
        <Description variant="body1">{t('리홀더brg카드만')}</Description>
        <Description variant="body1">
          {t('다른그레이딩회사제품불가')}
        </Description>
        <Description variant="body1">{t('brg시리얼넘버입력추가')}</Description>
      </Box>
      <InputWrapper>
        <Box flexGrow={1}>
          <TextField
            fullWidth
            onChange={onChange}
            onKeyPress={handleKeyPress}
            value={serial}
            variant="outlined"
            autoComplete="off"
            name="serial"
            size="medium"
            placeholder={t('시리얼번호입력')}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              maxLength: 20,
            }}
          />
        </Box>
        <Box minWidth={100} flexShrink={0}>
          <AddButton size="medium" fullWidth onClick={onClick}>
            {t('card-list-form/add')}
          </AddButton>
        </Box>
      </InputWrapper>
    </Box>
  );
}

const Description = styled(Typography)`
  line-height: 1.8;
  font-weight: 600;
`;

const InputWrapper = styled(Box)`
  display: flex;
  margin-top: 40px;
  gap: 20px;
  & .MuiOutlinedInput-input {
    font-size: 1rem;
    padding: 13px 14px;
  }
`;

const AddButton = styled(Button)({
  height: '100%',
  fontSize: '1rem',
  fontWeight: 700,
  backgroundColor: '#6034B0',
  color: 'white',
  border: '2px solid #6034B0',
  ':hover': {
    backgroundColor: '#6034B0',
  },
});

export default TopSection;
