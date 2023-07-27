import { useDeliveryCompanyListQuery } from '@/common/modules/apiHooks/delivery';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Table,
  TableBody,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import Portal from '@mui/material/Portal';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  Fragment,
  useRef,
} from 'react';
import { Control, Controller, useForm, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { KeyTableCell } from '@/common/components/ObjectTable/KeyTableCell';
import { ValueTableCell } from '@/common/components/ObjectTable/ValueTableCell';
import { CommonButton } from '@/common/components/Button';
import { DeliveryInfoFormType } from '@/specifics/account/modules/type/deliveryFormType';

interface ShippingInDeliveryTrackingObjectTableProps {
  defaultTrackingNumber?: string;
  defaultDeliveryCompanyNumber?: string;
  canUpdateInfo: boolean;
  setCanUpdateInfo: Dispatch<SetStateAction<boolean>>;
  onSave: (deliveryInfo: DeliveryInfoFormType) => void;
}
function ShippingInDeliveryTrackingObjectTable({
  defaultTrackingNumber = '',
  defaultDeliveryCompanyNumber = '',
  canUpdateInfo,
  setCanUpdateInfo,
  onSave,
}: ShippingInDeliveryTrackingObjectTableProps) {
  const { t } = useTranslation();
  const portalRef = useRef(null);

  const schema = yup.object().shape({
    deliveryCompanyNumber: yup
      .string()
      .min(1, t('delivery/select-delivery-company')),
    trackingNumber: yup
      .string()
      .matches(/^[0-9\s]*$/, t('grading/order/number-possible'))
      .min(1, t('delivery/input-delivery-number'))
      .max(200, t('delivery/input-delivery-number-200')),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DeliveryInfoFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      deliveryCompanyNumber: defaultDeliveryCompanyNumber,
      trackingNumber: defaultTrackingNumber,
    },
  });

  const hasDefaultValue = useMemo(() => {
    return canUpdateInfo
      ? false
      : !!(defaultDeliveryCompanyNumber && defaultTrackingNumber);
  }, [canUpdateInfo, defaultDeliveryCompanyNumber, defaultTrackingNumber]);

  useEffect(() => {
    reset({
      deliveryCompanyNumber: defaultDeliveryCompanyNumber,
      trackingNumber: defaultTrackingNumber,
    });
  }, [defaultDeliveryCompanyNumber, defaultTrackingNumber, reset]);

  const item = useMemo<{
    [x: string]: any;
  }>(() => {
    return {
      deliveryCompanyNumber: defaultDeliveryCompanyNumber,
      trackingNumber: defaultTrackingNumber,
    };
  }, [defaultDeliveryCompanyNumber, defaultTrackingNumber]);
  const keys = useMemo(
    () => [
      {
        text: t('general/select-courier'),
        value: 'deliveryCompanyNumber',
        renderCell: () => {
          return (
            <DeliveryCompanySelector
              isDisabled={hasDefaultValue}
              hookFormControllers={{ control, errors, register }}
            />
          );
        },
      },
      {
        text: t('general/transport-document-number'),
        value: 'trackingNumber',
        renderCell: () => {
          return (
            <TrackingNumberSection
              isDisabled={hasDefaultValue}
              hookFormControllers={{ control, errors, register }}
            />
          );
        },
      },
    ],
    [control, errors, hasDefaultValue, register, t]
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
      <form
        onSubmit={handleSubmit(onSave)}
        noValidate
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <Table>
          {keys.map((key) => {
            return (
              <TableBody key={key.text}>
                <TableRow>
                  <KeyTableCell
                    size="small"
                    component={'th' as any}
                    scope="row"
                    sx={{ fontWeight: 700, padding: '6px 0 0 0' }}
                  >
                    {key.text}
                  </KeyTableCell>
                </TableRow>
                <TableRow>
                  <ValueTableCell sx={{ padding: 0 }}>
                    {getRenderedCell(item[key.value], key.renderCell)}
                  </ValueTableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
        <Box display="flex" width="100%" mt={1} textAlign="left">
          <Typography variant="caption" fontWeight={700}>
            {t('caution/shipping-3')}
          </Typography>
        </Box>

        {hasDefaultValue && <Box mt={2} width={1} ref={portalRef} />}
        <Box mt={1} width={1}>
          {(canUpdateInfo || !hasDefaultValue) && (
            <Button
              fullWidth
              disableElevation
              color="primary"
              variant="contained"
              size="small"
              type="submit"
            >
              {t('general/save-space')}
            </Button>
          )}
          {!canUpdateInfo && hasDefaultValue && (
            <CommonButton
              onClick={() => setCanUpdateInfo(true)}
              buttonType="TEXT"
              fullWidth
            >
              {t('general/modify-space')}
            </CommonButton>
          )}
        </Box>
      </form>
      {hasDefaultValue && (
        <Portal container={portalRef.current}>
          <Box textAlign="center" mt={1} width={1}>
            {defaultTrackingNumber && defaultDeliveryCompanyNumber && (
              <DeliverySearchButton
                trackingNumber={defaultTrackingNumber}
                deliveryCompanyNumber={defaultDeliveryCompanyNumber}
              />
            )}
          </Box>
        </Portal>
      )}
    </Box>
  );
}

const DeliveryCompanySelector = ({
  hookFormControllers,
  isDisabled,
}: {
  hookFormControllers: {
    control: Control<DeliveryInfoFormType, object>;
    errors: {
      [x: string]: any;
    };
    register: UseFormRegister<DeliveryInfoFormType>;
  };
  isDisabled: boolean;
}) => {
  const { data: deliveryCompanyListData } = useDeliveryCompanyListQuery();
  const deliveryCompanyList = useMemo(() => {
    return deliveryCompanyListData?.Company;
  }, [deliveryCompanyListData?.Company]);
  const { control, errors, register } = hookFormControllers;

  return (
    <Box width="100%">
      {deliveryCompanyList && (
        <FormControl fullWidth variant="outlined">
          <Controller
            name="deliveryCompanyNumber"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <TextField
                  sx={{
                    '.Mui-disabled': {
                      backgroundColor: 'gray_200',
                    },
                  }}
                  select
                  {...register('deliveryCompanyNumber')}
                  fullWidth
                  size="small"
                  variant="outlined"
                  onChange={onChange}
                  value={value || ''}
                  inputProps={{
                    sx: { padding: '6px 14px' },
                  }}
                  name="deliveryCompanyNumber"
                  disabled={isDisabled}
                >
                  {deliveryCompanyList.map((company) => (
                    <MenuItem key={company.Code} value={company.Code}>
                      {company.Name}
                    </MenuItem>
                  ))}
                </TextField>
              );
            }}
          />
        </FormControl>
      )}
      <p style={{ fontSize: 11, color: 'red' }}>
        {errors.deliveryCompanyNumber && errors.deliveryCompanyNumber.message}
      </p>
    </Box>
  );
};

const TrackingNumberSection = ({
  hookFormControllers,
  isDisabled,
}: {
  hookFormControllers: {
    control: Control<DeliveryInfoFormType, object>;
    errors: {
      [x: string]: any;
    };
    register: UseFormRegister<DeliveryInfoFormType>;
  };
  isDisabled: boolean;
}) => {
  const { control, errors, register } = hookFormControllers;
  return (
    <Box width="100%">
      <FormControl fullWidth variant="outlined">
        <Controller
          name="trackingNumber"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box display="flex" width={1}>
              <TextField
                sx={{
                  '.Mui-disabled': {
                    backgroundColor: 'gray_200',
                  },
                }}
                {...register('trackingNumber')}
                fullWidth
                variant="outlined"
                value={value || ''}
                name="trackingNumber"
                onChange={onChange}
                size="small"
                inputProps={{
                  sx: { padding: '6px 14px' },
                }}
                disabled={isDisabled}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          )}
        />
        <p style={{ fontSize: 11, color: 'red' }}>
          {errors.trackingNumber && errors.trackingNumber.message}
        </p>
      </FormControl>
    </Box>
  );
};

const DeliverySearchButton = ({
  deliveryCompanyNumber,
  trackingNumber,
}: {
  deliveryCompanyNumber: string;
  trackingNumber: string;
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <form
        action={`${process.env.NEXT_PUBLIC_DELIVERY_BASE_URL}/tracking/5`}
        method="post"
        target="_blank"
      >
        <input
          type="hidden"
          id="t_key"
          name="t_key"
          value={process.env.NEXT_PUBLIC_DELIVERY_API_KEY}
        />
        <input
          type="hidden"
          name="t_code"
          id="t_code"
          value={deliveryCompanyNumber}
        />
        <input
          type="hidden"
          name="t_invoice"
          id="t_invoice"
          value={trackingNumber}
        />
        <CommonButton buttonType="GRAY" fullWidth type="submit">
          {t('general/delivery-check')}
        </CommonButton>
      </form>
    </Box>
  );
};

export default ShippingInDeliveryTrackingObjectTable;
