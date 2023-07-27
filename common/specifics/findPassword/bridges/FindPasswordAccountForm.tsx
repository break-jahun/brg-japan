import { useSendPasswordChangeLinkMutation } from '@/common/modules/apiHooks/useSendPasswordChangeLinkMutation';
import AccountForm, {
  AccountFormTextField,
} from '@/specifics/findPassword/components/AccountForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';

const FindPasswordAccountForm = () => {
  const { t } = useTranslation();
  const { mutate } = useSendPasswordChangeLinkMutation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('이메일형식검증실패'))
      .required(t('이메일입력필수')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: yupResolver(schema),
  });

  const handleFindPasswordSubmit: SubmitHandler<{ email: string }> = (
    formData
  ) => {
    mutate(formData.email);
  };

  return (
    <AccountForm
      buttonText={t('메일보내기')}
      onSubmit={handleSubmit(handleFindPasswordSubmit)}
    >
      <AccountFormTextField
        {...register('email')}
        placeholder={t('폼이메일')}
      />
      {errors.email && (
        <Typography variant="caption" color="red">
          {errors.email.message}
        </Typography>
      )}
    </AccountForm>
  );
};

export default FindPasswordAccountForm;
