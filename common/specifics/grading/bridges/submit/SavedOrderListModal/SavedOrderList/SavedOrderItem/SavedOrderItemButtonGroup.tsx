import { gradingOrderState } from '@/common/modules/recoil/gradingOrder';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import { useDeleteSavedGradingOrderMutation } from '@/specifics/grading/modules/apihooks/useSavedGradingOrderQuery';
import Delete from '@mui/icons-material/Delete';
import { Box, Button, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

interface Props {
  order: GradingOrderAttributes;
  handleClose: () => void;
}

const SavedOrderItemButtonGroup = ({ order, handleClose }: Props) => {
  const { t } = useTranslation();
  const [gradingOrder, setGradingOrder] = useRecoilState(gradingOrderState);

  const { mutate } = useDeleteSavedGradingOrderMutation();

  const handleLoadButtonClick = () => {
    order.gradingOrderItems?.forEach((item) => {
      delete item.serial;
    });

    if (window.confirm(t('temporary-storage/confirm'))) {
      setGradingOrder(order);
      handleClose();
    }
  };

  const handleDelete = () => {
    if (window.confirm(t('temporary-storage/card-info-remove-question'))) {
      if (gradingOrder.id === order.id) {
        alert(t('grading/submit/could-not-delete-current-order'));
        return;
      }

      mutate(order.id);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        onClick={handleLoadButtonClick}
        sx={{
          padding: '5px 10px',
          backgroundColor: '#4e5996',
          color: '#fff',
          fontWeight: 400,
          whiteSpace: {
            xs: 'initial',
            sm: 'nowrap',
          },
          marginRight: {
            xs: '10px',
            sm: '20px',
          },
          fontSize: {
            xs: '12px',
            sm: '14px',
          },
          '&:hover': {
            backgroundColor: '#4e5996',
          },
        }}
      >
        {t('temporary-storage/info-open')}
      </Button>
      <IconButton
        onClick={handleDelete}
        size="small"
        sx={{
          color: '#4e5996',
        }}
      >
        <Delete />
      </IconButton>
    </Box>
  );
};

export default SavedOrderItemButtonGroup;
