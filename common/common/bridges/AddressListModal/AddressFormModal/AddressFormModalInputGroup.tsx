import DaumPostcode, { Address } from 'react-daum-postcode';
import { useCallback } from 'react';
import Search from '@mui/icons-material/Search';
import {
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Modal,
  styled,
} from '@mui/material';
import FormLabelText from '@/common/components/FormLabelText';
import { Controller, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import useModal from '@/common/modules/hooks/useModal';
import useModalInputGroupParser from '@/specifics/grading/modules/hooks/parser/useModalInputGroupParser';
import { Key } from '.';

interface Props {
  control: UseFormReturn<Key>['control'];
  register: UseFormReturn<Key>['register'];
  errors: UseFormReturn['formState']['errors'];
  setValue: UseFormReturn<Key>['setValue'];
}

const AddressFormModalInputGroup = ({
  control,
  register,
  errors,
  setValue,
}: Props) => {
  const { t } = useTranslation();
  const { isOpen, handleOpen, handleClose } = useModal();
  const {
    shippingDestination,
    recipent,
    phoneNumber,
    address,
    detailAddress,
    shippingMemo,
  } = useModalInputGroupParser();

  const handlePostcodeComplete = useCallback(
    (data: Address) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress +=
            extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
      setValue('basicAddress', fullAddress);
      handleClose();
    },
    [setValue, handleClose]
  );

  return (
    <>
      <Box>
        <FormLabelText>{shippingDestination}</FormLabelText>
        <Controller
          name="title"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              {...register('title')}
              fullWidth
              variant="outlined"
              name="title"
              size="small"
              value={value || ''}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
            />
          )}
        />
        <Typography variant="body2" color="red">
          {errors.title?.message}
        </Typography>
        <FormLabelText>{recipent}</FormLabelText>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              {...register('name')}
              fullWidth
              variant="outlined"
              name="name"
              size="small"
              value={value || ''}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
            />
          )}
        />
        <Typography variant="body2" color="red">
          {errors.name?.message}
        </Typography>
        <FormLabelText>{phoneNumber}</FormLabelText>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              {...register('phone')}
              fullWidth
              variant="outlined"
              name="phone"
              // type="text"
              size="small"
              value={value || ''}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
            />
          )}
        />
        <Typography variant="body2" color="red">
          {errors.phone?.message}
        </Typography>
        <Box width={1}>
          <Box>
            <FormLabelText>{address}</FormLabelText>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Controller
                name="basicAddress"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    {...register('basicAddress')}
                    fullWidth
                    variant="outlined"
                    disabled
                    name="basicAddress"
                    size="small"
                    value={value || ''}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={onChange}
                    sx={{ backgroundColor: '#eeeeee', width: 10 / 12 }}
                  />
                )}
              />
              <Box
                sx={{
                  width: 2 / 12,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  sx={(theme) => ({
                    minWidth: 0,
                    padding: '5px',
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                    [theme.breakpoints.up('sm')]: {
                      minWidth: '64px',
                      padding: '5px 15px',
                    },
                  })}
                  variant="outlined"
                  color="inherit"
                  onClick={handleOpen}
                >
                  <Search />
                </Button>
              </Box>
            </Box>
            <Typography variant="body2" color="red">
              {errors.basicAddress?.message}
            </Typography>
          </Box>
        </Box>
        <FormLabelText>{detailAddress}</FormLabelText>
        <Controller
          name="extraAddress"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              {...register('extraAddress')}
              fullWidth
              variant="outlined"
              name="extraAddress"
              size="small"
              value={value || ''}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
            />
          )}
        />
        <FormLabelText>{shippingMemo}</FormLabelText>
        <Controller
          name="memo"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              {...register('memo')}
              fullWidth
              variant="outlined"
              name="memo"
              size="small"
              value={value || ''}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
            />
          )}
        />
      </Box>
      <Modal
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
        open={isOpen}
      >
        <ModalContainer>
          <DaumPostcode onComplete={handlePostcodeComplete} />
        </ModalContainer>
      </Modal>
    </>
  );
};

export default AddressFormModalInputGroup;

const ModalContainer = styled(Box)(({ theme }) => ({
  width: '95vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    width: '70%',
  },
}));
