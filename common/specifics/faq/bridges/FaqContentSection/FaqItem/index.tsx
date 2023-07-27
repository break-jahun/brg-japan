import { useEffect, useState } from 'react';
import { Accordion } from '@mui/material';
import { FaqItemType } from '@/specifics/faq/faqType';
import FaqItemAnswer from '@/specifics/faq/bridges/FaqContentSection/FaqItem/FaqItemAnswer';
import FaqItemQuestion from '@/specifics/faq/bridges/FaqContentSection/FaqItem/FaqItemQuestion';

interface FaqContentItemProps {
  item: FaqItemType;
}

function FaqContentItem({ item }: FaqContentItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((value) => !value);
  };

  useEffect(() => {
    setIsExpanded(false);
  }, [item]);

  return (
    <Accordion
      expanded={isExpanded}
      onClick={handleClick}
      sx={{
        padding: '0',
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }}
    >
      <FaqItemQuestion isExpanded={isExpanded} question={item.question} />
      <FaqItemAnswer answer={item.answer} />
    </Accordion>
  );
}

export default FaqContentItem;
