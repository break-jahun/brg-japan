import { AccordionDetails, Typography } from '@mui/material';

interface FaqItemAnswerProps {
  answer: string[];
}

const INDENT_STRING = ['-', '※', '1', '2', '3', '4'];

function FaqItemAnswer({ answer }: FaqItemAnswerProps) {
  return (
    <AccordionDetails
      sx={{
        padding: '16px 24px',
        borderRadius: '0px 0px 8px 8px',
        backgroundColor: 'white',
      }}
    >
      {answer.map((item, index) => {
        const isIndent = INDENT_STRING.includes(item.charAt(0));
        return (
          <Typography
            key={`answer_${index + 1}`}
            sx={{
              textIndent: isIndent ? '-10px' : '',
              marginLeft: isIndent ? '10px' : '',
              whiteSpace: 'pre-wrap',
              wordBreak: 'keep-all',
            }}
            color="gray_700"
            variant="body1"
          >
            {item}
          </Typography>
        );
      })}
    </AccordionDetails>
  );
}

export default FaqItemAnswer;
