import {
  Box,
  Typography,
  TextField,
  Modal,
  TextFieldProps,
} from '@mui/material';
import { VStack } from '@/common/components/VStack';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { useState, useCallback } from 'react';
import {
  CardCategory,
  GradingOrderItemAttributes,
  initGradingOrderItem,
} from '@/common/types/grading/gradingOrderItem';
import { useSetRecoilState } from 'recoil';
import { gradingOrderItemsState } from '@/common/modules/recoil/gradingOrder';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { CommonButton } from '@/common/components/Button';
import getCategoryText from '@/common/utils/getCategoryText';
import { LocaleType } from '@/common/types/common';
import PhotoUpload from './PhotoUpload';

type QuantityType = 'autoQuantity' | 'nonAutoQuantity';

type QuantityData = {
  [firstKey in CardCategory]: {
    [secondKey in QuantityType]: number;
  };
};

const SubmitFormTextField = ({ ...props }: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      type="number"
      InputProps={{ inputProps: { min: 0 } }}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
};

const SimpleSubmitInputGroup = () => {
  const { t, i18n } = useTranslation();

  const setGradingOrderItems = useSetRecoilState(gradingOrderItemsState);

  const [showModal, setShowModal] = useState(false);
  const [quantityData, setQuantityData] = useState<QuantityData>({
    POKEMON: {
      autoQuantity: 0,
      nonAutoQuantity: 0,
    },
    YUGIOH: {
      autoQuantity: 0,
      nonAutoQuantity: 0,
    },
    ETC_TCG: {
      autoQuantity: 0,
      nonAutoQuantity: 0,
    },
    SPORTS: {
      autoQuantity: 0,
      nonAutoQuantity: 0,
    },
    ETC: {
      autoQuantity: 0,
      nonAutoQuantity: 0,
    },
  });

  const handleOpen = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleChangeQuantity =
    (category: CardCategory, quantityType: QuantityType) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const newQuantityData = {
        ...quantityData,
        ...{
          [category]: {
            ...quantityData[category],
            [quantityType]: Number(event.target.value),
          },
        },
      };

      const pokemonItems = Array.from({
        length: newQuantityData.POKEMON.nonAutoQuantity,
      }).map(
        () =>
          ({
            ...initGradingOrderItem,
            cardCategory: 'POKEMON',
            isAuto: false,
          } as GradingOrderItemAttributes)
      );

      const yugiohItems = Array.from({
        length: newQuantityData.YUGIOH.nonAutoQuantity,
      }).map(
        () =>
          ({
            ...initGradingOrderItem,
            cardCategory: 'YUGIOH',
            isAuto: false,
          } as GradingOrderItemAttributes)
      );

      const etcTcgItems = Array.from({
        length: newQuantityData.ETC_TCG.nonAutoQuantity,
      }).map(
        () =>
          ({
            ...initGradingOrderItem,
            cardCategory: 'ETC_TCG',
            isAuto: false,
          } as GradingOrderItemAttributes)
      );

      const sportsAutoItems = Array.from({
        length: newQuantityData.SPORTS.autoQuantity,
      }).map(
        () =>
          ({
            ...initGradingOrderItem,
            cardCategory: 'SPORTS',
            isAuto: true,
          } as GradingOrderItemAttributes)
      );

      const sportsNonAutoItems = Array.from({
        length: newQuantityData.SPORTS.nonAutoQuantity,
      }).map(
        () =>
          ({
            ...initGradingOrderItem,
            cardCategory: 'SPORTS',
            isAuto: false,
          } as GradingOrderItemAttributes)
      );

      const etcAutoItems = Array.from({
        length: newQuantityData.ETC.autoQuantity,
      }).map(
        () =>
          ({
            ...initGradingOrderItem,
            cardCategory: 'ETC',
            isAuto: true,
          } as GradingOrderItemAttributes)
      );

      const etcNonAutoItems = Array.from({
        length: newQuantityData.ETC.nonAutoQuantity,
      }).map(
        () =>
          ({
            ...initGradingOrderItem,
            cardCategory: 'ETC',
            isAuto: false,
          } as GradingOrderItemAttributes)
      );

      const newGradingOrderItems = etcTcgItems.concat(
        pokemonItems,
        yugiohItems,
        sportsAutoItems,
        sportsNonAutoItems,
        etcAutoItems,
        etcNonAutoItems
      );

      setQuantityData(newQuantityData);
      setGradingOrderItems(newGradingOrderItems);
    };

  return (
    <>
      <Box
        mt={2}
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridAutoRows: 'minmax(65px, auto)',
          gap: '1rem',
        }}
      >
        <CenteredVStack>
          <CardTitle>
            {getCategoryText.POKEMON[i18n.language as LocaleType]}
          </CardTitle>
        </CenteredVStack>
        <CenteredVStack sx={{ gridColumn: 'span 2' }}>
          <SubmitFormTextField
            label={`${t('general/auto2')}`}
            name="quantity"
            placeholder={t('grading/order/number')}
            onChange={handleChangeQuantity('POKEMON', 'nonAutoQuantity')}
          />
        </CenteredVStack>
        <CenteredVStack>
          <CardTitle>
            {getCategoryText.YUGIOH[i18n.language as LocaleType]}
          </CardTitle>
        </CenteredVStack>
        <CenteredVStack sx={{ gridColumn: 'span 2' }}>
          <SubmitFormTextField
            label={`${t('general/auto2')}`}
            name="quantity"
            placeholder={t('grading/order/number')}
            onChange={handleChangeQuantity('YUGIOH', 'nonAutoQuantity')}
          />
        </CenteredVStack>
        <CenteredVStack>
          <CardTitle>
            {getCategoryText.ETC_TCG[i18n.language as LocaleType]}
          </CardTitle>
          <Typography variant="caption">
            {t('general/other-tcg-card-example')}
          </Typography>
        </CenteredVStack>
        <CenteredVStack sx={{ gridColumn: 'span 2' }}>
          <SubmitFormTextField
            label={`${t('general/auto2')}`}
            name="quantity"
            placeholder={t('grading/order/number')}
            onChange={handleChangeQuantity('ETC_TCG', 'nonAutoQuantity')}
          />
        </CenteredVStack>
        <CenteredVStack>
          <CardTitle>
            {getCategoryText.SPORTS[i18n.language as LocaleType]}
          </CardTitle>
          <Typography variant="caption">
            {t('general/sports-example')}
          </Typography>
        </CenteredVStack>
        <CenteredVStack>
          <SubmitFormTextField
            label={`${t('general/auto2')}`}
            name="quantity"
            placeholder={t('grading/order/number')}
            onChange={handleChangeQuantity('SPORTS', 'autoQuantity')}
          />
        </CenteredVStack>
        <CenteredVStack>
          <SubmitFormTextField
            label={`${t('general/non-auto2')}`}
            name="quantity"
            placeholder={t('grading/order/number')}
            onChange={handleChangeQuantity('SPORTS', 'nonAutoQuantity')}
          />
        </CenteredVStack>
        <CenteredVStack>
          <CardTitle>
            {getCategoryText.ETC[i18n.language as LocaleType]}
          </CardTitle>
          <Typography variant="caption">{t('general/etc-card')}</Typography>
        </CenteredVStack>
        <CenteredVStack>
          <SubmitFormTextField
            label={`${t('general/auto2')}`}
            name="quantity"
            placeholder={t('grading/order/number')}
            onChange={handleChangeQuantity('ETC', 'autoQuantity')}
          />
        </CenteredVStack>
        <CenteredVStack>
          <SubmitFormTextField
            label={`${t('general/non-auto2')}`}
            name="quantity"
            placeholder={t('grading/order/number')}
            onChange={handleChangeQuantity('ETC', 'nonAutoQuantity')}
          />
        </CenteredVStack>
      </Box>
      <VStack mt={1} alignItems="center">
        <CommonButton
          sx={{ minWidth: '60%' }}
          startIcon={<PhotoCameraIcon />}
          onClick={handleOpen}
        >
          {t('grading/order/require-photo')}
        </CommonButton>
      </VStack>
      <Modal open={showModal} onClose={handleClose}>
        <Box>
          <PhotoUpload onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default SimpleSubmitInputGroup;

const CardTitle = styled(Typography)({
  fontWeight: 800,
});

const CenteredVStack = styled(VStack)({
  justifyContent: 'center',
  alignItems: 'center',
});
