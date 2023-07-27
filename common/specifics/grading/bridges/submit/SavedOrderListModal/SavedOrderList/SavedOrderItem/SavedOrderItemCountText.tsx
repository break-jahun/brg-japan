import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SavedOrderItemCountText = ({
  gradingOrderItems,
}: {
  gradingOrderItems: GradingOrderItemAttributes[];
}) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        width: '60%',
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
          textAlign: 'right',
          width: '100%',
          marginRight: '50px',
          fontSize: '14px',
        },
      })}
    >
      <Typography
        sx={(theme) => ({
          marginRight: '5px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          [theme.breakpoints.up('sm')]: {
            width: 200,
          },
        })}
      >
        {gradingOrderItems[0]?.playerName}
      </Typography>
      <Typography>
        {t('temporary-storage/besides')}
        {gradingOrderItems.length - 1}
        {t('general/a-sheet')}
      </Typography>
    </Box>
  );
};

export default SavedOrderItemCountText;
