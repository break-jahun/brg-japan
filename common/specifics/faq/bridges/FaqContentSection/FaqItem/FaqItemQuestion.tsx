import { AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FaqItemQuestionProps {
  isExpanded: boolean;
  question: string;
}

function FaqItemQuestion({ isExpanded, question }: FaqItemQuestionProps) {
  return (
    <AccordionSummary
      expandIcon={
        <ExpandMoreIcon
          sx={{
            color: isExpanded ? 'white' : 'rgba(0, 0, 0, 0.36)',
          }}
        />
      }
      aria-controls="panel1a-content"
      sx={{
        alignItems: { xs: 'flex-start', sm: 'center' },
        padding: '16px',
        backgroundColor: isExpanded ? 'secondary_20' : 'gray_100',
        borderRadius: isExpanded ? '8px 8px 0px 0px' : '8px',

        '&.Mui-expanded': {
          minHeight: '0',
        },
        '.MuiAccordionSummary-content': {
          margin: '0',
        },
        '.MuiAccordionSummary-content.Mui-expanded': {
          margin: '0',
        },
        '@media (hover :hover)': {
          '&:hover': {
            backgroundColor: 'secondary_20',
            borderRadius: isExpanded ? '8px 8px 0px 0px' : '8px',

            '.MuiTypography-root': {
              color: 'white',
            },
            '.MuiSvgIcon-root': {
              color: 'white',
            },
          },
        },
      }}
    >
      <Typography color={isExpanded ? 'white' : 'black'}>{question}</Typography>
    </AccordionSummary>
  );
}

export default FaqItemQuestion;
