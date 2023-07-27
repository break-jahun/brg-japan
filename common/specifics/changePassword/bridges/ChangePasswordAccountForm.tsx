import AccountForm, {
  AccountFormTextField,
} from '@/specifics/findPassword/components/AccountForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePasswordChangeMutation } from '@/common/modules/apiHooks/usePasswordChangeMutation';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

const QUERY_PARAM = {
  code: 'code',
  email: 'email',
};

const ChangePasswordAccountForm = () => {
  const { t } = useTranslation();
  const { mutate } = usePasswordChangeMutation();
  const router = useRouter();

  const code = router.query?.[QUERY_PARAM.code] as string;
  const email = router.query?.[QUERY_PARAM.email] as string;

  const schema = yup.object().shape({
    password: yup
      .string()
      .required(t('change-7'))
      .matches(
        /^[a-zA-Z0-9!@#$%^&*()\\|[\]{};:'",.<>/?`~ \-_+=]{6,32}$/,
        t('change-6')
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ password: string }>({
    resolver: yupResolver(schema),
  });

  const handleChangePassword: SubmitHandler<{ password: string }> = (
    password
  ) => {
    mutate({
      code,
      email,
      ...password,
    });
  };

  return (
    <AccountForm
      buttonText={t('change-1')}
      onSubmit={handleSubmit(handleChangePassword)}
    >
      <AccountFormTextField
        {...register('password')}
        type="password"
        placeholder={t('change-3')}
      />
      {errors.password && (
        <Typography variant="caption" color="red">
          {errors.password.message}
        </Typography>
      )}
    </AccountForm>
  );
};

export default ChangePasswordAccountForm;
