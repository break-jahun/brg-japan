import { useDeliveryCompanyListQuery } from '@/common/modules/apiHooks/delivery';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as Sentry from '@sentry/react';

import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  Table,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { Bank } from '@tosspayments/payment__types/types/models/Bank';

import { useEffect, useMemo, useState } from 'react';
import {
  Control,
  Controller,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { KeyTableCell } from '@/common/components/ObjectTable/KeyTableCell';
import { ValueTableCell } from '@/common/components/ObjectTable/ValueTableCell';
import { CommonButton } from '@/common/components/Button';
import { useOrderInfoTranslation } from '@/specifics/account/modules/hooks/useOrderInfo';
import { bankList, RefundReceiveAccountType } from '@/common/types/payment';
import {
  useChangeRefundAccountMutation,
  useChangeReholderRefundAccountMutation,
} from '@/specifics/account/modules/api/payment';
import { OrderTypeType } from '@/specifics/account/modules/type/orderType';
import { ServiceOrderDetailProps } from '@/common/types/serviceOrder/serviceOrder';
import { ChangeRefundAccountResponse } from '@/specifics/grading/modules/api/tossPayments';

interface OrderRefundAccountInfoProps {
  defaultBank?: string;
  defaultAccountNumber?: string;
  defaultAccountName?: Bank;
  disabled: boolean;
  order: ServiceOrderDetailProps;
  refetch: () => void;
  serviceOrderType?: OrderTypeType;
}
export interface RefundAccountInfoFormType {
  bank: Bank;
  accountNumber: string;
  accountName: Bank;
}

function OrderRefundAccountInfo({
  defaultBank,
  defaultAccountNumber,
  defaultAccountName,
  disabled,
  order,
  serviceOrderType = 'GRADING',
  refetch,
}: OrderRefundAccountInfoProps) {
  const [isModifying, setIsModifying] = useState(false);
  const { mutate: mutateGrading, isLoading: isLoadingGrading } =
    useChangeRefundAccountMutation();
  const { mutate: mutateReholder, isLoading: isLoadingReholder } =
    useChangeReholderRefundAccountMutation();
  const isLoading = useMemo(() => {
    return isLoadingGrading || isLoadingReholder;
  }, [isLoadingGrading, isLoadingReholder]);

  const onSave: SubmitHandler<RefundAccountInfoFormType> = (data) => {
    //   grading 분기 처리 필요
    function handleOnSuccess(response: ChangeRefundAccountResponse) {
      // TODO: 번역 적용 필요
      if (response.code === 0) {
        alert('수정되었습니다.');
        refetch();
      } else {
        alert('환불 계좌 정보 수정에 실패하였습니다.');
        Sentry.captureException(response.data);
      }
      setIsModifying(false);
    }
    if (serviceOrderType === 'GRADING') {
      mutateGrading(
        {
          gradingOrderId: order.id,
          body: {
            bank: data.bank,
            accountNumber: data.accountNumber,
            holderName: data.accountName,
          },
        },
        {
          onSuccess: (response) => {
            handleOnSuccess(response);
          },
        }
      );
    } else if (serviceOrderType === 'REHOLDER') {
      mutateReholder(
        {
          merchantUid: order.payment?.merchant_uid as string,
          body: {
            bank: data.bank,
            accountNumber: data.accountNumber,
            holderName: data.accountName,
          },
        },
        {
          onSuccess: (response) => {
            handleOnSuccess(response);
          },
        }
      );
    }
  };

  const { t } = useTranslation();
  const schema = yup.object().shape({
    bank: yup
      .string()
      .required(t('account/order-cancel/virtualAccount-select-bank')),
    accountNumber: yup
      .string()
      .matches(
        /^[0-9]+$/,
        t('account/order-cancel/virtualAccount-confirm-number')
      ) // 숫자만 가능(띄어쓰기 불가)
      .required(t('account/order-cancel/virtualAccount-confirm-number')),
    accountName: yup
      .string()
      .matches(
        /^[a-zA-Z가-힇ㄱ-ㅎㅏ-ㅣぁ-ゔァ-ヴー々〆〤一-龥\s]+$/,
        t('account/order-cancel/virtualAccount-confirm-name')
      ) // 한국어, 영어, 일어, 한자, 띄어쓰기만 가능
      .required(t('account/order-cancel/virtualAccount-confirm-name')),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RefundAccountInfoFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      bank: defaultBank as Bank,
      accountNumber: defaultAccountNumber,
      accountName: defaultAccountName,
    },
  });

  useEffect(() => {
    reset({
      bank: defaultBank as Bank,
      accountNumber: defaultAccountNumber,
      accountName: defaultAccountName,
    });
  }, [defaultAccountName, defaultAccountNumber, defaultBank, reset]);

  const item = useMemo<{
    [x: string]: any;
  }>(() => {
    return {
      bank: undefined,
      accountNumber: defaultAccountNumber,
      accountName: undefined,
    };
  }, [defaultAccountNumber]);
  const keys = useMemo(
    () => [
      {
        text: t('account/order-cancel/virtualAccount-refund-bank'),
        value: 'bank',
        renderCell: () => {
          return (
            <BankSelector
              isDisabled={disabled || !isModifying}
              hookFormControllers={{ control, errors, register }}
            />
          );
        },
      },
      {
        text: t('general/account-number'),
        value: 'accountNumber',
        renderCell: () => {
          return (
            <HookFormedTextField
              key="accountNumber"
              isDisabled={disabled || !isModifying}
              hookFormControllers={{ control, errors, register }}
              placeholder={t('account/order-cancel/virtualAccount-numberOnly')}
              name="accountNumber"
            />
          );
        },
      },
      {
        text: t('general/account-holder'),
        value: 'accountName',
        renderCell: () => {
          return (
            <HookFormedTextField
              key="accountName"
              isDisabled={disabled || !isModifying}
              hookFormControllers={{ control, errors, register }}
              placeholder={t('account/order-cancel/virtualAccount-enter-name')}
              name="accountName"
            />
          );
        },
      },
    ],
    [control, disabled, errors, register, t, isModifying]
  );
  function getRenderedCell(
    value: any,
    renderCell?: (value: any) => React.ReactNode
  ) {
    if (renderCell) {
      return renderCell(value);
    }
    if (
      !renderCell &&
      (typeof value === 'object' || typeof value === 'boolean') &&
      value !== null
    ) {
      return JSON.stringify(value);
    }
    return value;
  }
  return (
    <Box textAlign="center">
      <Box mb={1}>
        <Typography fontWeight={700}>
          {disabled ? '환불 계좌 정보' : '환불 받으실 정보를 수정해 주세요.'}
        </Typography>
      </Box>
      <form
        onSubmit={handleSubmit(onSave)}
        noValidate
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <Table>
          {keys.map((key) => {
            return (
              <>
                <TableRow>
                  <KeyTableCell
                    size="small"
                    component={'th' as any}
                    scope="row"
                    sx={{
                      padding: '6px 0 0 0',
                      color: disabled || !isModifying ? 'gray_500' : 'black',
                      fontWeight: disabled || !isModifying ? 400 : 700,
                    }}
                  >
                    {key.text}
                  </KeyTableCell>
                </TableRow>
                <TableRow>
                  <ValueTableCell sx={{ padding: 0 }}>
                    {getRenderedCell(item[key.value], key.renderCell)}
                  </ValueTableCell>
                </TableRow>
              </>
            );
          })}
        </Table>
        <Box width={1} mt={3}>
          {isModifying && (
            <Button
              fullWidth
              disableElevation
              color="primary"
              variant="contained"
              size="small"
              type="submit"
            >
              {isLoading ? (
                <CircularProgress size="1.5rem" />
              ) : (
                t('general/save-space')
              )}
            </Button>
          )}
          {!isModifying && (
            <CommonButton
              onClick={() => setIsModifying(true)}
              buttonType="TEXT"
              fullWidth
              disabled={disabled}
            >
              {t('general/modify-space')}
            </CommonButton>
          )}
        </Box>
      </form>
    </Box>
  );
}

const BankSelector = ({
  hookFormControllers,
  isDisabled,
}: {
  hookFormControllers: {
    control: Control<RefundAccountInfoFormType, object>;
    errors: {
      [x: string]: any;
    };
    register: UseFormRegister<RefundAccountInfoFormType>;
  };
  isDisabled: boolean;
}) => {
  const { data: deliveryCompanyListData } = useDeliveryCompanyListQuery();
  const { setBankName } = useOrderInfoTranslation();
  const { t } = useTranslation();
  const deliveryCompanyList = useMemo(() => {
    return deliveryCompanyListData?.Company;
  }, [deliveryCompanyListData?.Company]);
  const { control, errors, register } = hookFormControllers;
  return (
    <Box width="100%">
      <FormControl fullWidth variant="outlined">
        <Controller
          name="bank"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              sx={{
                '.Mui-disabled': {
                  backgroundColor: 'gray_200',
                },
              }}
              {...register('bank')}
              fullWidth
              size="small"
              variant="outlined"
              onChange={onChange as any}
              placeholder={t('account/order-cancel/virtualAccount-select-bank')}
              value={value || ''}
              inputProps={{
                sx: { padding: '6px 14px' },
              }}
              name="bank"
              disabled={isDisabled}
              renderValue={
                !value
                  ? () => (
                      <span style={{ color: 'gray_4' }}>
                        {t('account/order-cancel/virtualAccount-select-bank')}
                      </span>
                    )
                  : () => <span>{setBankName(value)}</span>
              }
            >
              {bankList.map((bank, index) => {
                return (
                  <MenuItem key={`${bank}_List`} value={bank}>
                    {setBankName(bank)}
                  </MenuItem>
                );
              })}
            </Select>
          )}
        />
      </FormControl>
      <p style={{ fontSize: 11, color: 'red' }}>
        {errors.bank && errors.bank.message}
      </p>
    </Box>
  );
};

const HookFormedTextField = ({
  hookFormControllers,
  isDisabled,
  name,
  placeholder,
}: {
  hookFormControllers: {
    control: Control<RefundAccountInfoFormType, object>;
    errors: {
      [x: string]: any;
    };
    register: UseFormRegister<RefundAccountInfoFormType>;
  };
  isDisabled: boolean;
  name: keyof RefundAccountInfoFormType;
  placeholder: string;
}) => {
  const { control, errors, register } = hookFormControllers;
  return (
    <Box width="100%">
      <FormControl fullWidth variant="outlined">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box display="flex" width={1}>
              <TextField
                sx={{
                  '.Mui-disabled': {
                    backgroundColor: 'gray_200',
                  },
                }}
                {...register(name)}
                fullWidth
                variant="outlined"
                value={value || ''}
                name={name}
                onChange={onChange}
                size="small"
                inputProps={{
                  sx: { padding: '6px 14px' },
                }}
                disabled={isDisabled}
                autoComplete="off"
                placeholder={placeholder}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          )}
        />
        <p style={{ fontSize: 11, color: 'red' }}>
          {errors[name] && errors[name].message}
        </p>
      </FormControl>
    </Box>
  );
};

export default OrderRefundAccountInfo;
