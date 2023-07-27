import { Locale, LocaleType } from '@/common/types/common';
import {
  Box,
  Divider,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function LanguageSelect() {
  const { i18n } = useTranslation();

  const { language } = i18n;

  const handleChange = (_: any, value: LocaleType) => {
    i18n.changeLanguage(value);
    localStorage.setItem('language', value);
  };

  return (
    <LanguageSelectWrapper
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="body2" fontWeight={700}>
        LANGUAGE
      </Typography>
      <ToggleButtonGroup value={language} onChange={handleChange} exclusive>
        {Object.entries(Locale).map(([key, value]) => (
          <ToggleButton key={key} value={value}>
            {key}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </LanguageSelectWrapper>
  );
}
const LanguageSelectWrapper = styled(Box)({
  '.MuiToggleButton-root': {
    border: 'none',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  '.MuiToggleButton-root.Mui-selected': {
    background: 'none',
    fontWeight: 700,
  },
});

export default LanguageSelect;
