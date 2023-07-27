import {
  Button,
  Checkbox,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
  Box,
  styled,
  Grid,
} from '@mui/material';
import { useCallback, useEffect } from 'react';
import * as yup from 'yup';
import { object, SchemaOf } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import HelpIcon from '@mui/icons-material/Help';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/common/components/VStack';
import { HStack } from '@/common/components/HStack';
import getCategoryText, {
  getCategoryExampleText,
} from '@/common/utils/getCategoryText';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  gradingOrderItemsSelectorFamily,
  gradingOrderItemsState,
} from '@/common/modules/recoil/gradingOrder';
import {
  CardCategory,
  CARD_CATEGORY,
  GradingOrderItemAttributes,
  GRADING_ORDER_ITEM,
  initGradingOrderItem,
  isAutoDisabledCategoryList,
} from '@/common/types/grading/gradingOrderItem';
import CARD_MIN_GRADE from '@/constants/CARD_MIN_GRADE';
import { LocaleType } from '@/common/types/common';
import {
  currentItemIdState,
  currentItemState,
} from '@/specifics/grading/modules/recoil/apply';
import getUuid from '@/common/utils/getUuid';
import SaveButtonGroup from './SaveButtonGroup';
import OrderDescription from './OrderDescription';

interface FormData
  extends Pick<
    GradingOrderItemAttributes,
    | 'brand'
    | 'signer'
    | 'correspondCheck'
    | 'cardCategory'
    | 'year'
    | 'cardNumber'
    | 'setName'
    | 'playerName'
    | 'description'
    | 'cardMinGrade'
    | 'casing'
    | 'isAuto'
  > {
  quantity: number;
}

type Schema = {
  [key in keyof FormData]: any;
};

const useOrderInputParser = () => {
  const { i18n } = useTranslation();

  const getMenuItemText = (type: CardCategory) => {
    const category = getCategoryText[type][i18n.language as LocaleType];
    const categoryExample =
      getCategoryExampleText[type][i18n.language as LocaleType];

    return `${category}${categoryExample ? `(${categoryExample})` : ''}`;
  };

  return {
    getMenuItemText,
  };
};

function OrderInput() {
  const { t } = useTranslation();
  const { getMenuItemText } = useOrderInputParser();

  const currentItemId = useRecoilValue(currentItemIdState);
  const currentItem = useRecoilValue(currentItemState);
  const setGradingOrderItem = useSetRecoilState(
    gradingOrderItemsSelectorFamily(
      currentItemId === -1 ? getUuid() : currentItemId
    )
  );
  const setGradingOrderItems = useSetRecoilState(gradingOrderItemsState);
  const isModifying = !!currentItem;

  const schema: SchemaOf<Schema> = object().shape({
    brand: yup.string(),
    signer: yup.string(),
    correspondCheck: yup
      .string()
      .default(GRADING_ORDER_ITEM.CORRESPOND_CHECK.NOT_DETERMINED),
    cardCategory: yup.string().oneOf(CARD_CATEGORY.map((category) => category)),
    year: yup
      .string()
      .matches(/^[0-9\s]*$/, t('grading/order/number-possible'))
      .max(4, '연도는 최대 네 글자까지 입력 가능합니다.')
      .transform((value) => value.replace(/\s*$/, '')),
    cardNumber: yup.string().transform((value) => value.replace(/\s*$/, '')),
    setName: yup.string().transform((value) => value.replace(/\s*$/, '')),
    playerName: yup
      .string()
      .required(t('grading/order/fill-empty-input'))
      .transform((value) => value.replace(/\s*$/, '')),
    description: yup.string().transform((value) => value.replace(/\s*$/, '')),
    quantity: yup
      .number()
      .default(1)
      .min(1, t('grading/order/more-than-1'))
      .typeError(''),
    cardMinGrade: yup.number(),
    casing: yup.boolean().default(false),
    isAuto: yup.boolean().default(false),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...initGradingOrderItem,
      quantity: 1,
      cardMinGrade: 0,
      isAuto: false,
      casing: true,
    },
  });

  watch();

  const { cardMinGrade: currentCardMinGrade } = getValues();

  const handleSaveItem = useCallback(
    (formData: FormData) => {
      if (formData.quantity > 1) {
        // 수량이 2개 이상일 경우
        const newGradingOrderItems: GradingOrderItemAttributes[] = [];
        Array.from({ length: formData.quantity }).forEach(() => {
          newGradingOrderItems.push({
            id: getUuid(),
            ...initGradingOrderItem,
            ...formData,
            quantity: 1,
          });
        });
        setGradingOrderItems((prev) => [...prev, ...newGradingOrderItems]);
        reset();
        return;
      }
      setGradingOrderItem({ ...initGradingOrderItem, ...formData });
      reset();
    },
    [setGradingOrderItem, reset, setGradingOrderItems]
  );

  // 오토여부가 disabled 되야하는 조건
  // const isAutoDisabledCategoryList = ['POKEMON', 'YUGIOH', 'ETC_TCG'];
  const { cardCategory } = getValues();
  const isAutoDisabled =
    cardCategory && isAutoDisabledCategoryList.includes(cardCategory);

  useEffect(() => {
    if (isAutoDisabled) {
      setValue('isAuto', false);
    }
  }, [isAutoDisabled, setValue]);

  useEffect(() => {
    if (isModifying) {
      (
        Object.keys(currentItem) as Array<keyof Omit<FormData, 'quantity'>>
      ).forEach((property) => {
        setValue(property, currentItem[property]);
      });
    }
  }, [currentItem, isModifying, setValue]);

  useEffect(() => {
    if (currentCardMinGrade === 0) {
      setValue('casing', true);
    }
  }, [currentCardMinGrade, setValue]);

  return (
    <Box>
      <VStack>
        <SaveButtonGroup />
        <OrderDescription />
      </VStack>
      <form onSubmit={handleSubmit(handleSaveItem)} noValidate>
        <Grid container rowSpacing="0.8rem" columnSpacing={2}>
          <Grid
            item
            sx={(theme) => ({
              flexBasis: '100%',

              [theme.breakpoints.up(1200)]: {
                flexBasis: '50%',
                maxWidth: '50%',
              },
            })}
          >
            <VStack>
              <StyledFormLabel>
                {t('general/grading-type')}
                <Tooltip
                  enterTouchDelay={0}
                  title={t('grading/order/grading-type-tooltip')}
                >
                  <HelpIcon />
                </Tooltip>
              </StyledFormLabel>
              <Controller
                name="cardCategory"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledSelect
                    {...register('cardCategory')}
                    fullWidth
                    onChange={onChange as any}
                    value={value}
                    variant="standard"
                    size="small"
                  >
                    {Object.values(CARD_CATEGORY).map((type, index) => {
                      return (
                        <MenuItem key={type} value={type}>
                          {getMenuItemText(type)}
                        </MenuItem>
                      );
                    })}
                  </StyledSelect>
                )}
              />
            </VStack>
          </Grid>
          <Grid
            item
            sx={(theme) => ({
              flexBasis: '100%',

              [theme.breakpoints.up(1200)]: {
                flexBasis: '25%',
                maxWidth: '25%',
              },
            })}
          >
            <VStack>
              <StyledFormLabel>{t('general/year2')}</StyledFormLabel>
              <Controller
                name="year"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledTextField
                    {...register('year')}
                    fullWidth
                    onChange={onChange}
                    value={value || ''}
                    variant="outlined"
                    name="year"
                    size="small"
                    placeholder={t('general/placeholder-year')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
              <ErrorMessage>{errors.year && errors.year.message}</ErrorMessage>
            </VStack>
          </Grid>
          <Grid
            item
            sx={(theme) => ({
              flexBasis: '100%',

              [theme.breakpoints.up(1200)]: {
                flexBasis: '25%',
                maxWidth: '25%',
              },
            })}
          >
            <VStack>
              <StyledFormLabel>{t('general/card-number')}</StyledFormLabel>
              <Controller
                name="cardNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledTextField
                    {...register('cardNumber')}
                    fullWidth
                    onChange={onChange}
                    value={value || ''}
                    variant="outlined"
                    autoComplete="off"
                    name="cNumber"
                    size="small"
                    placeholder={t('general/placeholder-cardNumber')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </VStack>
          </Grid>
          <Grid
            item
            sx={(theme) => ({
              flexBasis: '100%',

              [theme.breakpoints.up(1200)]: {
                flexBasis: '50%',
                maxWidth: '50%',
              },
            })}
          >
            <VStack>
              <StyledFormLabel>{t('general/set-name')}</StyledFormLabel>
              <Controller
                name="setName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledTextField
                    {...register('setName')}
                    fullWidth
                    onChange={onChange}
                    value={value || ''}
                    variant="outlined"
                    autoComplete="off"
                    name="setName"
                    size="small"
                    placeholder={t('general/placeholder-setName')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </VStack>
          </Grid>
          <Grid
            item
            sx={(theme) => ({
              flexBasis: '100%',

              [theme.breakpoints.up(1200)]: {
                flexBasis: '50%',
                maxWidth: '50%',
              },
            })}
          >
            <VStack>
              <StyledFormLabel>
                <span style={{ fontWeight: 'bold' }}>
                  {`(${t('general/required')})`}
                </span>
                &nbsp;
                {t('general/player-name-card-name')}
                <Tooltip
                  enterTouchDelay={0}
                  title={t('grading/submit/input-player')}
                >
                  <HelpIcon />
                </Tooltip>
              </StyledFormLabel>
              <Controller
                name="playerName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledTextField
                    {...register('playerName')}
                    fullWidth
                    onChange={onChange}
                    value={value || ''}
                    variant="outlined"
                    name="playerName"
                    size="small"
                    placeholder={t('general/placeholder-playerName-yugioh')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
              <ErrorMessage>
                {errors.playerName && errors.playerName.message}
              </ErrorMessage>
            </VStack>
          </Grid>
          <Grid
            item
            sx={(theme) => ({
              flexBasis: '100%',

              [theme.breakpoints.up(1200)]: {
                flexBasis: '50%',
                maxWidth: '50%',
              },
            })}
          >
            <VStack>
              <StyledFormLabel>{t('general/card-info')}</StyledFormLabel>
              <Controller
                name="description"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledTextField
                    {...register('description')}
                    fullWidth
                    variant="outlined"
                    name="description"
                    onChange={onChange}
                    value={value || ''}
                    size="small"
                    placeholder={t('general/placeholder-description-yugioh')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </VStack>
          </Grid>
          <Grid
            item
            sx={(theme) => ({
              flexBasis: '100%',

              [theme.breakpoints.up(1200)]: {
                flexBasis: '25%',
                maxWidth: '25%',
              },
            })}
          >
            <VStack>
              <StyledFormLabel>
                {t('general/card-quantity')}
                <Tooltip
                  enterTouchDelay={0}
                  title={t('grading/submit/input-description-quantity')}
                >
                  <HelpIcon />
                </Tooltip>
              </StyledFormLabel>

              <Controller
                name="quantity"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledTextField
                    {...register('quantity')}
                    fullWidth
                    variant="outlined"
                    name="quantity"
                    onChange={onChange}
                    value={value}
                    size="small"
                    placeholder={t('general/placeholder-quantity')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="number"
                    InputProps={{ inputProps: { min: 1 } }}
                    // disabled={!!modifyingGradingItem}
                  />
                )}
              />
              <ErrorMessage>
                {errors.quantity && errors.quantity.message}
              </ErrorMessage>
            </VStack>
          </Grid>
          <Grid
            item
            sx={(theme) => ({
              flexBasis: '100%',

              [theme.breakpoints.up(1200)]: {
                flexBasis: '25%',
                maxWidth: '25%',
              },
            })}
          >
            <VStack>
              <StyledFormLabel>
                {t('grading/order/min-grade')}
                <Tooltip
                  enterTouchDelay={0}
                  title={
                    <Box sx={{ whiteSpace: 'pre-wrap' }}>
                      {t('grading/order/min-grade-tooltip')}
                    </Box>
                  }
                >
                  <HelpIcon />
                </Tooltip>
              </StyledFormLabel>
              <Controller
                name="cardMinGrade"
                control={control}
                render={({ field: { value } }) => (
                  <StyledSelect
                    {...register('cardMinGrade')}
                    fullWidth
                    value={value}
                    variant="standard"
                    size="small"
                    MenuProps={{ style: { height: 300 } }}
                    // onChange={(e) => handleChangeMinGrade(e)}
                  >
                    {CARD_MIN_GRADE.map((grade, index) => {
                      return (
                        <MenuItem key={grade} value={grade}>
                          {grade !== 0 ? grade : t('선택안함')}
                        </MenuItem>
                      );
                    })}
                  </StyledSelect>
                )}
              />
            </VStack>
          </Grid>
          <Grid item xs={12}>
            <VStack>
              <HStack
                alignItems="center"
                color={(theme) => theme.palette.gray_5}
              >
                <Controller
                  name="casing"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      checked={value}
                      onChange={onChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                      disabled={
                        !(currentCardMinGrade && currentCardMinGrade > 0)
                      }
                      sx={{ padding: 0 }}
                    />
                  )}
                />
                <Typography variant="body2" ml={1}>
                  {t('grading/order/choose-casing')}
                </Typography>
                <Tooltip
                  enterTouchDelay={0}
                  title={
                    <Box sx={{ whiteSpace: 'pre-wrap' }}>
                      {t('grading/order/casing-tooltip')}
                    </Box>
                  }
                >
                  <HelpIcon fontSize="small" />
                </Tooltip>
              </HStack>
            </VStack>
          </Grid>
          {!isAutoDisabled && (
            <Grid item xs={12}>
              <HStack
                alignItems="center"
                color={(theme) => theme.palette.gray_5}
              >
                <Controller
                  name="isAuto"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      checked={value}
                      onChange={onChange}
                      onClick={() => {
                        alert(t('오토심사선택안내'));
                      }}
                      inputProps={{ 'aria-label': 'controlled' }}
                      disabled={isAutoDisabled}
                      sx={{ padding: 0 }}
                    />
                  )}
                />
                <Typography variant="body2" ml={1}>
                  {t('grading/order/auto-judge')}
                </Typography>
                <Tooltip
                  enterTouchDelay={0}
                  title={
                    <Box sx={{ whiteSpace: 'pre-wrap' }}>
                      {t('grading/order/auto-tooltip')}
                    </Box>
                  }
                >
                  <HelpIcon fontSize="small" />
                </Tooltip>
              </HStack>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ fontWeight: 700 }}
            >
              {t('general/save')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

const Description = styled(Typography)({
  fontWeight: 700,
});

const ContentDescription = styled(Description)({
  color: '#304ffe',
});

const GridBox = styled(Box)({
  display: 'grid',
  gap: '0.8rem',
});

const StyledFormLabel = styled(FormLabel)({
  fontSize: '0.7rem',
  display: 'flex',
  alignItems: 'center',
  svg: {
    width: '0.9rem',
    height: '0.9rem',
  },
});

const StyledSelect = styled(Select)({
  padding: '5px 0px',
  fontSize: '0.8rem',
});

const StyledTextField = styled(TextField)({
  '.MuiOutlinedInput-input': {
    fontSize: '0.8rem',
  },
});

const ErrorMessage = styled('p')({
  color: 'red',
  fontSize: 10,
});

export default OrderInput;
