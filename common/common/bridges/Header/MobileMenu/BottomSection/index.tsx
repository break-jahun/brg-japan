import LanguageSelect from '@/common/bridges/Header/MobileMenu/BottomSection/LanguageSelect';
import { Box } from '@mui/material';

interface BottomSectionProps {}

function BottomSection() {
  return (
    <Box marginTop="auto" paddingBottom="20px">
      <LanguageSelect />
    </Box>
  );
}

export default BottomSection;
