import useOpen from '@/common/modules/hooks/useOpen';
import {
  reholderCardListState,
  ReholderCardType,
  reholderPriceState,
} from '@/common/modules/recoil/reholder';
import ApplyCardList from '@/specifics/grading/bridges/submit/SubmitDetail/ReholderSubmitForm/ApplyCardList';
import ReholderInformation from '@/specifics/grading/bridges/submit/SubmitDetail/ReholderSubmitForm/ReholderInformation';
import SerialInfoContent from '@/specifics/grading/bridges/submit/SubmitDetail/ReholderSubmitForm/SerialInfoContent';
import TopSection from '@/specifics/grading/bridges/submit/SubmitDetail/ReholderSubmitForm/TopSection';
import SubmitFormTitle from '@/specifics/grading/bridges/submit/SubmitDetail/SubmitFormTitle';
import ShadowStyledBox from '@/specifics/grading/components/submit/ShadowStyledBox';
import useGetCardBySerialQuery from '@/specifics/grading/modules/apihooks/useGetCardBySerialQuery';
import { Box, Dialog, Modal } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

function ReholderSubmitForm() {
  const [serial, setSerial] = useState('');
  const { open: isOpen, handleOpen, handleClose } = useOpen();
  const { t } = useTranslation();

  const [showDetailSeeModal, setShowDetailSeeModal] = useState(true);

  const handleCloseModal = () => {
    setShowDetailSeeModal(false);
  };

  const [reholderCardList, setReholderCardList] = useRecoilState(
    reholderCardListState
  );

  const reholderPrice = useRecoilValue(reholderPriceState);

  const { data, refetch } = useGetCardBySerialQuery(serial, { enabled: false });

  const handleSave = () => {
    if (!data) {
      return;
    }
    const newCardInfo: ReholderCardType = {
      id: data.id,
      serial,
      cardInfo: data.cardInfo,
      cardCategory: data.cardCategory,
      amount: reholderPrice,
      correspondCheck: data.correspondCheck,
      price: reholderPrice,
    };

    const isAlreadyExists = reholderCardList?.some(
      (item) => item.id === data.id
    );

    if (isAlreadyExists) {
      alert(t('이미추가된카드'));
      handleClose();
      setSerial('');
      return;
    }

    setReholderCardList((prev) =>
      prev ? [...prev, newCardInfo] : [newCardInfo]
    );

    handleClose();
    setSerial('');
  };

  const handleChangeSerial = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (!Number.isNaN(Number(event.target.value))) {
      setSerial(event.target.value);
    }
  };

  const handleDeleteCardInfo = (id: number) => {
    setReholderCardList((prev) => prev?.filter((item) => item.id !== id));
  };

  const handleClickAdd = async () => {
    const { isError } = await refetch();

    if (isError) {
      alert(t('시리얼번호확인'));
      return;
    }

    handleOpen();
  };

  return (
    <ShadowStyledBox sx={{ height: '80vh', overflowY: 'auto' }}>
      <Box>
        <SubmitFormTitle />
        <TopSection
          onChange={handleChangeSerial}
          onClick={handleClickAdd}
          onOpenDialog={handleOpen}
          serial={serial}
        />
        <Box mt={5}>
          <ApplyCardList
            data={reholderCardList}
            onDelete={handleDeleteCardInfo}
          />
        </Box>
        <Dialog
          open={isOpen}
          onClose={handleClose}
          sx={{ minWidth: { xs: '80vw', sm: '600px' } }}
        >
          <SerialInfoContent
            onSave={handleSave}
            onClose={handleClose}
            serial={serial}
            data={data?.cardInfo}
          />
        </Dialog>
      </Box>
      <Modal open={showDetailSeeModal} onClose={handleCloseModal}>
        <Box>
          <ReholderInformation onClose={handleCloseModal} />
        </Box>
      </Modal>
    </ShadowStyledBox>
  );
}

export default ReholderSubmitForm;
