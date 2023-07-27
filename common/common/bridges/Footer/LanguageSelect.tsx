import { Locale, LocaleType } from '@/common/types/common';
import {
  Box,
  Divider,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  toggleButtonClasses,
  toggleButtonGroupClasses,
  buttonBaseClasses,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

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
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <LanguageIcon sx={{ color: 'white' }} />
      <ToggleButtonGroup value={language} onChange={handleChange} exclusive>
        {Object.entries(Locale).map(([key, value]) => (
          <ToggleButton
            key={key}
            value={value}
            sx={{ color: '#c0c0c0', fontWeight: 700 }}
          >
            {key}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </LanguageSelectWrapper>
  );
}
const LanguageSelectWrapper = styled(Box)({
  [`& .${toggleButtonClasses.root}`]: {
    border: 'none',
  },
  [`.${toggleButtonClasses.root}.${toggleButtonClasses.selected}`]: {
    background: 'none',
    fontWeight: 700,
    color: 'white',
  },
  [`& .${buttonBaseClasses.root}`]: {
    padding: 7,
  },
});

export default LanguageSelect;
