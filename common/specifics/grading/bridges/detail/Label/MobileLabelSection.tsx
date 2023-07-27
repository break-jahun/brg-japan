/* eslint-disable @next/next/no-img-element */
import { Box, Tabs, Tab, tabClasses, tabsClasses } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MobileLabelFrontBackImageTabProps {
  frontImage: string;
  backImage: string;
}

function MobileLabelFrontBackImageTab({
  frontImage,
  backImage,
}: MobileLabelFrontBackImageTabProps) {
  const { t } = useTranslation();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box width={1}>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(0, 0, 0, 0.12)' }}>
        <Tabs
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          value={value}
          onChange={handleChange}
          sx={(theme) => ({
            [`& .${tabsClasses.indicator}`]: {
              height: 3,
              borderRadius: '50px',
              color: theme.palette.secondary_20,
              backgroundColor: theme.palette.secondary_20,
            },
            [`& .${tabClasses.textColorSecondary}`]: {
              color: theme.palette.black,
              opacity: 0.36,
            },
            [`& .${tabClasses.textColorSecondary}.${tabClasses.selected}`]: {
              fontWeight: 700,
              color: theme.palette.secondary_20,
              opacity: 1,
            },
          })}
        >
          <Tab label={t('앞면')} />
          <Tab label={t('뒷면')} />
        </Tabs>
      </Box>
      <TabPanel value={value} src={frontImage} index={0} />
      <TabPanel value={value} src={backImage} index={1} />
    </Box>
  );
}

export default MobileLabelFrontBackImageTab;

interface TabPanelProps {
  src: string;
  index: number;
  value: number;
}

const TabPanel = ({ src, index, value }: TabPanelProps) => {
  return (
    <Box>
      {value === index && (
        <Box
          display="flex"
          justifyContent="center"
          paddingTop="39px"
          paddingBottom="50px"
          borderBottom="1px solid rgba(0, 0, 0, 0.12)"
        >
          <img src={src} alt="label_image" width="328px" />
        </Box>
      )}
    </Box>
  );
};
