import useModal from '@/common/modules/hooks/useModal';
import OrderConfirmModal from '@/specifics/grading/bridges/orderComplete/OrderConfirm/OrderConfirmModal';
import { Box, Button, Modal } from '@mui/material';
import { useTranslation } from 'react-i18next';

const OrderConfirm = () => {
  const { t } = useTranslation();
  const { isOpen, handleOpen } = useModal();

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" width={1}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleOpen}
          sx={{
            m: 1,
            boxShadow: 'unset',
          }}
        >
          {t('orderComplete-9')}
        </Button>
      </Box>
      <Modal
        open={isOpen}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <OrderConfirmModal />
      </Modal>
    </>
  );
};

export default OrderConfirm;
