import { Box, styled } from '@mui/material';

const MenuAccordionWrapper = styled(Box)({
  '.MuiAccordionSummary-root': {
    padding: 0,
    minHeight: 0,
  },
  '.MuiAccordionSummary-root.Mui-expanded': {
    padding: 0,
    minHeight: 0,
  },
  '.MuiAccordionSummary-content': {
    margin: 0,
    minHeight: 0,
  },
  '.MuiAccordionSummary-content.Mui-expanded': {
    margin: 0,
    minHeight: 0,
  },
  '.MuiAccordion-root': {
    margin: 0,
    boxShadow: 'none',
    background: 'inherit',
  },
  '.MuiAccordion-root.Mui-expanded': {
    margin: 0,
    // boxShadow: 'none',
  },
  '.MuiAccordionDetails-root': {
    padding: 0,
  },
});

export default MenuAccordionWrapper;
