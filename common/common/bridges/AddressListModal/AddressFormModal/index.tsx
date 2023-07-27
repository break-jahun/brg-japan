import { Box, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { AddressAttributes, initAddress } from '@/common/types/user/address';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, SchemaOf } from 'yup';
import { forwardRef, useMemo } from 'react';
import {
  useAddressPostMutation,
  useAddressUpdateMutation,
} from '@/common/modules/hooks/useAddressQuery';
import { addressPhoneReplace } from '@/specifics/grading/modules/utils/addressUtils';
import AddressFormModalHeader from './AddressFormModalHeader';
import AddressFormModalInputGroup from './AddressFormModalInputGroup';
import AddressFormSubmitButton from './AddressFormSubmitButton';

export type Key = Pick<
  AddressAttributes,
  | 'title'
  | 'phone'
  | 'address'
  | 'basicAddress'
  | 'extraAddress'
  | 'isDefault'
  | 'memo'
  | 'name'
>;

type Schema = {
  [key in keyof Key]: any;
};

interface Props {
  handleClose: () => void;
  modifiedItem: AddressAttributes | null;
  onModifySuccess?: () => void;
}

const AddressFormModal = forwardRef(
  ({ handleClose, modifiedItem, onModifySuccess }: Props, ref) => {
    const postMutation = useAddressPostMutation();
    const updateMutation = useAddressUpdateMutation();
    const { t } = useTranslation();

    const title = useMemo(() => {
      if (modifiedItem) {
        return t('account/adress/change-shipping-destination');
      }
      return t('profile-36');
    }, [modifiedItem, t]);

    const schema: SchemaOf<Schema> = object().shape({
      title: yup.string().required(t('profile-45')),
      name: yup.string().required(t('profile-46')),
      phone: yup
        .string()
        .required(t('profile-47'))
        .matches(
          /**
           * @todo
           * 일반전화 형식일 경우 현재 500에러 떨어져서 일반전화 or 휴대폰번호 정규식은 주석처리
           * 휴대폰번호 정규식만 적용. 하이픈 입력여부는 상관없음
           */
          // /(^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$)|(^\d{2,3}-?\d{3,4}-?\d{4}$)/,
          /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
          '전화번호 형식과 맞지 않습니다'
        ) // 전화번호 형식과 맞지 않습니다 i18n 작업 필요
        .transform(addressPhoneReplace),
      address: yup.string(),
      memo: yup.string(),
      basicAddress: yup.string().required(t('profile-48')),
      extraAddress: yup.string(),
      isDefault: yup.boolean().default(false),
    });

    const {
      register,
      control,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<Key>({
      resolver: yupResolver(schema),
      defaultValues: modifiedItem || initAddress,
    });

    const handleSave = (formData: Key) => {
      const address = {
        ...formData,
        address: `${formData.basicAddress} ${formData.extraAddress}`,
      };

      if (modifiedItem) {
        updateMutation.mutate(address, {
          onSuccess: () => {
            alert(t('account/adress/changed-address'));

            onModifySuccess?.();

            handleClose();
          },
          onError: () => {
            alert(t('account/adress/error-changed-address'));
          },
        });

        return;
      }

      postMutation.mutate(address, {
        onSuccess: () => {
          alert(t('account/adress/complete-add-address'));
          handleClose();
        },
        onError: () => {
          alert(t('account/adress/error-add-address'));
        },
      });
    };

    return (
      <AddressFormModalContainer ref={ref} tabIndex={-1}>
        <AddressFormModalHeader handleClose={handleClose} title={title} />
        <AddressFormModalInputGroup
          control={control}
          register={register}
          errors={errors}
          setValue={setValue}
        />
        <AddressFormSubmitButton onClick={handleSubmit(handleSave)} />
      </AddressFormModalContainer>
    );
  }
);

export default AddressFormModal;

export const AddressFormModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '95vw',
  backgroundColor: 'white',
  outline: 0,
  padding: '10px',
  borderRadius: '4px',
  maxHeight: '80vh',
  overflowY: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: '500px',
  },
}));
