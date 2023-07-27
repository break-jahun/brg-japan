import { useTranslation } from 'react-i18next';
import { HStack } from '@/common/components/HStack';
import { Button, Dialog, dialogClasses, styled } from '@mui/material';
import { useRecoilValue } from 'recoil';
import {
  gradingOrderItemsState,
  gradingOrderState,
} from '@/common/modules/recoil/gradingOrder';
import {
  useSavedGradingOrderQuery,
  useSaveGradingOrderMutation,
} from '@/specifics/grading/modules/apihooks/useSavedGradingOrderQuery';
import { memo, useMemo } from 'react';
import { queryKeys } from '@/common/types/common';
import SavedOrderListModal from '@/specifics/grading/bridges/submit/SavedOrderListModal';
import useModal from '@/common/modules/hooks/useModal';
import { useQueryClient } from '@tanstack/react-query';

const useSaveButtonGroupParser = () => {
  const { data } = useSavedGradingOrderQuery();

  const gradingOrderItems = useRecoilValue(gradingOrderItemsState);

  const hasSavedGradingOrderItems = useMemo(() => {
    const savedOrderCount = data?.count;
    return savedOrderCount ? savedOrderCount > 0 : false;
  }, [data]);

  const hasGradingOrderItems = useMemo(
    () => gradingOrderItems.length > 0,
    [gradingOrderItems]
  );

  return {
    hasGradingOrderItems,
    hasSavedGradingOrderItems,
  };
};

const SaveButtonGroup = () => {
  const { t } = useTranslation();
  const { mutate } = useSaveGradingOrderMutation();
  const gradingOrder = useRecoilValue(gradingOrderState);
  const { isOpen, handleClose, handleOpen } = useModal();
  const queryClient = useQueryClient();

  const { hasGradingOrderItems, hasSavedGradingOrderItems } =
    useSaveButtonGroupParser();

  const handleSaveClick = () => {
    mutate(gradingOrder, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.savedGradingOrder);
      },
    });
  };

  return (
    <>
      <HStack justifyContent="space-around" marginTop={1} marginBottom={1}>
        <TempSaveButton
          isActive={hasGradingOrderItems}
          onClick={handleSaveClick}
          disabled={!hasGradingOrderItems}
        >
          {t('temporary-storage/save')}
        </TempSaveButton>

        <TempSaveButton
          isActive={hasSavedGradingOrderItems}
          disabled={!hasSavedGradingOrderItems}
          onClick={handleOpen}
        >
          {t('temporary-storage/save-open')}
        </TempSaveButton>
      </HStack>
      <Dialog
        open={isOpen}
        sx={(theme) => ({
          [`& .${dialogClasses.paper}`]: {
            margin: { xs: '10px', sm: 0 },
          },
          [`& .${dialogClasses.paperWidthSm}`]: {
            width: '100%',

            [theme.breakpoints.up('sm')]: {
              maxWidth: '900px',
              width: 'auto',
            },
          },
        })}
      >
        <SavedOrderListModal handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default memo(SaveButtonGroup);

const TempSaveButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  borderRadius: 50,
  color: 'white !important',
  boxShadow: '5px 5px 10px -5px rgb(0 0 0 / 10%)',
  backgroundImage: isActive
    ? 'linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)'
    : 'linear-gradient(to right, #7f7f7f 0%, #9b9b9b 100%)',
  minWidth: '45%',
  fontWeight: 800,
  letterSpacing: 2,
  padding: '10px 0px',
}));
