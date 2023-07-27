import {
  Box,
  inputBaseClasses,
  outlinedInputClasses,
  Select,
  SelectChangeEvent,
  svgIconClasses,
} from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useCategoryListParser from '@/specifics/faq/hooks/useFaqCategoryParser';
import useFaqListParser from '@/specifics/faq/hooks/useFaqListParse';
import FaqContent from '@/specifics/faq/bridges/FaqContentSection/FaqContent';
import { MenuItem } from '@/common/components/Select';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';

function FaqContentSection() {
  const { i18n } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState('all');

  const { faqList } = useFaqListParser(selectedCategory);
  const { categoryList } = useCategoryListParser();

  const handleChangeCategory = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    setSelectedCategory('all');
  }, [i18n.language]);

  return (
    <Box
      p={{ xs: '64px 16px', sm: '80px 32px' }}
      sx={{ backgroundColor: 'gray_100' }}
    >
      <MaxWidthLayoutBox>
        <Select
          value={selectedCategory}
          onChange={handleChangeCategory}
          IconComponent={ArrowDropDownRoundedIcon}
          sx={{
            '&': {
              width: { xs: '100%', sm: '162px' },
            },
            [`&.${outlinedInputClasses.notchedOutline}`]: {
              border: `1px solid  #616161`,
            },
            [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
              {
                border: `1px solid  #616161`,
              },
            [`& .${inputBaseClasses.input}`]: {
              padding: '10px 10px 10px 20px',
            },
            [`& .${svgIconClasses.root}`]: {
              color: 'gray_700',
              right: '0',
            },
          }}
        >
          {categoryList.map((category) => (
            <MenuItem value={category[0]} dense key={category[0]}>
              {category[1]}
            </MenuItem>
          ))}
        </Select>
        <FaqContent faqList={faqList} />
      </MaxWidthLayoutBox>
    </Box>
  );
}

export default FaqContentSection;
