import { FaqItemType } from '@/specifics/faq/faqType';
import { Box, Divider } from '@mui/material';
import FaqContentItem from '@/specifics/faq/bridges/FaqContentSection/FaqItem';

interface FaqContentProps {
  faqList: FaqItemType[];
}

function FaqContent({ faqList }: FaqContentProps) {
  return (
    <Box margin={{ xs: '40px 0', sm: '80px 0' }}>
      {faqList.map((item, index) => {
        return (
          <Box key={item.id}>
            <FaqContentItem item={item} />
            {faqList.length - 1 > index && <Divider sx={{ margin: '8px 0' }} />}
          </Box>
        );
      })}
    </Box>
  );
}

export default FaqContent;
