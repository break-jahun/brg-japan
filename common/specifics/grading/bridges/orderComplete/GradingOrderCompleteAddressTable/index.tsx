import useModal from '@/common/modules/hooks/useModal';
import useOrderComplete from '@/specifics/grading/modules/hooks/useOrderComplete';
import { queryKeys } from '@/common/types/common';
import { useQueryClient } from '@tanstack/react-query';
import useHandleSaveOrderAddress from '@/common/modules/hooks/useHandleSaveOrderAddress';
import OrderCompleteAddressTable from '@/common/components/OrderComplete/OrderCompleteAddressTable';
import { AddressAttributes, initAddress } from '@/common/types/user/address';

const GradingOrderCompleteAddressTable = () => {
  const {
    addressName,
    mbName,
    memo,
    name,
    phone,
    address,
    handleClose,
    handleOpen,
    handleSaveGradingOrderAddress,
    isOpen,
    refreshOrderItem,
  } = useGradingOrderCompleteAddressTableParser();

  return (
    <OrderCompleteAddressTable
      address={address}
      addressName={addressName}
      handleClose={handleClose}
      handleOpen={handleOpen}
      handleSaveOrderAddress={handleSaveGradingOrderAddress}
      isOpen={isOpen}
      mbName={mbName}
      memo={memo}
      phone={phone}
      refreshOrderItem={refreshOrderItem}
      name={name}
    />
  );
};

function useGradingOrderCompleteAddressTableParser() {
  const { data } = useOrderComplete();
  const { isOpen, handleClose, handleOpen } = useModal();
  const queryClient = useQueryClient();

  const { handleSaveOrderAddress: handleSaveGradingOrderAddress } =
    useHandleSaveOrderAddress({
      serviceType: 'GRADING',
      orderId: data?.id,
      onSuccessSave: () => {
        handleClose();
      },
    });

  const refreshOrderItem = () => {
    queryClient.invalidateQueries(queryKeys.gradingOrderById(`${data?.id}`));
  };

  const addressName = data?.receiverAddress ?? '';
  const mbName = data?.member?.mbName ?? '';
  const memo = data?.receiverMemo ?? '';
  const name = data?.receiverName ?? '';
  const phone = data?.receiverPhone ?? '';
  const address: AddressAttributes = {
    ...initAddress,
    name,
    address: addressName,
    memo,
    phone,
  };

  return {
    address,
    addressName,
    mbName,
    memo,
    name,
    phone,
    handleClose,
    handleOpen,
    handleSaveGradingOrderAddress,
    isOpen,
    refreshOrderItem,
  };
}

export default GradingOrderCompleteAddressTable;
