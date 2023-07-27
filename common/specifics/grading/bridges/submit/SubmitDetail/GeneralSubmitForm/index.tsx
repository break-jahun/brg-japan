import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCallback, useState } from 'react';
import { animateScroll } from 'react-scroll';
import ShadowStyledBox from '@/specifics/grading/components/submit/ShadowStyledBox';
import SubmitFormTitle from '@/specifics/grading/bridges/submit/SubmitDetail/SubmitFormTitle';
import OrderInput from './OrderInput';
import OrderHistory from './OrderHistory';
import OrderInformation from './OrderInformation';

type Panel = 'panel1' | 'panel2' | 'panel3';

function SubmitForm() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState<Panel | false>('panel1');

  const handleChange = useCallback(
    (panel: Panel) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      if (isExpanded === true) {
        animateScroll.scrollToTop();
      }
    },
    []
  );
  return (
    <Box>
      <Wrapper display={{ xs: 'none', sm: 'grid' }}>
        <Box>
          <SubmitFormTitle />
          <OrderInput />
        </Box>
        <Box>
          <Typography fontWeight="700">{t('general/order-details')}</Typography>
          <OrderHistory />
        </Box>
        <Box>
          <Typography fontWeight="700" textAlign="center">
            {t('general/order-info')}
          </Typography>
          <OrderInformation />
        </Box>
      </Wrapper>
      {/* 모바일 아코디언 형태 */}
      <ShadowStyledBox
        width={1}
        display={{ xs: 'inline-block', sm: 'none' }}
        sx={{
          '& .MuiAccordion-root:before': {
            background: 'none',
          },
        }}
      >
        <StyledAccordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="order-input"
            id="order-input"
          >
            <Title variant="h6" textAlign="center">
              {t('grading/order/input')}
            </Title>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            {/* <OrderInput /> */}
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="order-statement"
            id="order-statement"
          >
            <Title variant="h6" textAlign="center">
              {t('general/order-details')}
            </Title>
          </AccordionSummary>
          <AccordionDetails>
            <OrderHistory />
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="order-information"
            id="order-information"
          >
            <Title variant="h6" textAlign="center">
              {t('general/order-info')}
            </Title>
          </AccordionSummary>
          <AccordionDetails>
            <OrderInformation />
          </AccordionDetails>
        </StyledAccordion>
      </ShadowStyledBox>
    </Box>
  );
}

const Wrapper = styled(ShadowStyledBox)<{}>(() => ({
  gridTemplateColumns: '3fr 1fr',
  gridTemplateAreas: `
          'order-input order-input'
          'order-statement order-information'
        `,
  gap: '1rem',
  '& > div': {
    ':first-of-type': {
      gridArea: 'order-input',
    },
    ':nth-of-type(2)': {
      gridArea: 'order-statement',
    },
    ':nth-of-type(3)': {
      gridArea: 'order-information',
    },
  },
}));

const Title = styled(Typography)({
  fontWeight: 700,
});

const StyledAccordion = styled(Accordion)({
  boxShadow: 'none',
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
});

export default SubmitForm;
