import useModal from '@/common/modules/hooks/useModal';
import { queryKeys } from '@/common/types/common';
import { useQueryClient } from '@tanstack/react-query';
import useHandleSaveOrderAddress from '@/common/modules/hooks/useHandleSaveOrderAddress';
import OrderCompleteAddressTable from '@/common/components/OrderComplete/OrderCompleteAddressTable';
import useReholderOrderComplete from '@/specifics/reholder/modules/hooks/useReholderOrderComplete';
import { AddressAttributes, initAddress } from '@/common/types/user/address';
import useReholderOrderDetail from '@/specifics/reholder/modules/hooks/useReholderOrderDetail';

function ReholderOrderCompleteAddressTable() {
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
}

function useGradingOrderCompleteAddressTableParser() {
  const { data } = useReholderOrderDetail();
  const { isOpen, handleClose, handleOpen } = useModal();
  const queryClient = useQueryClient();

  const refreshOrderItem = () => {
    queryClient.invalidateQueries(
      queryKeys.reholderOrderDetailById(`${data?.id}`)
    );
  };

  const { handleSaveOrderAddress: handleSaveGradingOrderAddress } =
    useHandleSaveOrderAddress({
      serviceType: 'REHOLDER',
      orderId: data?.id,
      onSuccessSave: () => {
        handleClose();
        refreshOrderItem();
      },
    });

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

export default ReholderOrderCompleteAddressTable;
