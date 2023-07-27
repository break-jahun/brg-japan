import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useChangePasswordMutation } from '@/specifics/account/modules/apihooks/useChangePasswordMutation';
import PasswordFormItem from '@/specifics/account/bridges/profile/BasicInfoModifySection/PasswordFormItem';
import { CommonButton } from '@/common/components/Button';

export interface PasswordFormType {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export type PasswordFormLabels =
  | 'currentPassword'
  | 'newPassword'
  | 'confirmPassword';

const useChangePasswordParser = () => {
  const { t } = useTranslation();

  const text = {
    button: t('profile-6'),
    currentPassword: t('profile-2'),
    newPassword: t('profile-3'),
    confirmPassword: t('profile-4'),
    passwordRule: t('profile-5'),
    pleaseInputPassword: t('profile-7'),
    notMatchConfirmPassword: t('profile-8'),
    changeSuccess: t('profile-9'),
  };

  const schema = yup.object().shape({
    currentPassword: yup.string().min(1, text.pleaseInputPassword),
    newPassword: yup
      .string()
      .min(1, text.pleaseInputPassword)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#.?&])[A-Za-z\d$@$!%*#.?&]{6,}$/,
        text.passwordRule
      ),
    confirmPassword: yup
      .string()
      .min(1, text.pleaseInputPassword)
      .oneOf([yup.ref('newPassword'), null], text.notMatchConfirmPassword)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#.?&])[A-Za-z\d$@$!%*#.?&]{6,}$/,
        text.passwordRule
      ),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordFormType>({
    resolver: yupResolver(schema),
  });

  const { mutate: mutateChangePassword } = useChangePasswordMutation();

  const handleSavePassword: SubmitHandler<PasswordFormType> = (formData) => {
    const { currentPassword, newPassword } = formData;

    mutateChangePassword(
      {
        mbCurrentPw: currentPassword,
        mbNewPw: newPassword,
      },
      {
        onSuccess: (data) => {
          if (data?.data) {
            alert(text.changeSuccess);
          } else {
            alert('비밀번호 변경에 실패했습니다.');
          }
          reset();
        },
      }
    );
  };

  return {
    handleSavePassword,
    handleSubmit,
    register,
    control,
    errors,
    reset,
    text,
  };
};

function PasswordkFormGroup() {
  const {
    handleSavePassword,
    handleSubmit,
    register,
    control,
    errors,
    reset,
    text,
  } = useChangePasswordParser();

  const keys: PasswordFormLabels[] = [
    'currentPassword',
    'newPassword',
    'confirmPassword',
  ];

  useEffect(() => {
    reset({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  }, [reset]);

  return (
    <Box width="100%">
      <form onSubmit={handleSubmit(handleSavePassword)} noValidate>
        {keys.map((key) => {
          return (
            <PasswordFormItem
              key={key}
              name={key}
              label={text[key as PasswordFormLabels]}
              hookFormControllers={{
                control,
                error: errors[key],
                register,
              }}
            />
          );
        })}
        <Box m={2} mb={4} textAlign="center">
          <Typography color="gray_700" variant="caption">
            {text.passwordRule}
          </Typography>
        </Box>
        <Box width="100%">
          <CommonButton buttonType="GRAY" fullWidth type="submit">
            {text.button}
          </CommonButton>
        </Box>
      </form>
    </Box>
  );
}

export default PasswordkFormGroup;
