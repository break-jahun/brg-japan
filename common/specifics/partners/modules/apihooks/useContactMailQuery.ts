import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import partners from '@/specifics/partners/modules/api/partners';

export const useContactMailMutation = () => {
  const { t } = useTranslation();

  return useMutation(partners.postContactMail, {
    onSuccess: () => {
      alert(t('about-30'));
    },
    onError: () => {
      alert(t('메일전송실패'));
    },
  });
};

export const useGlobalContactMailMutation = () => {
  return useMutation(partners.postContactMail, {
    onSuccess: () => {
      alert('An email has been sent.');
    },
    onError: () => {
      alert('Failed to send email.');
    },
  });
};
