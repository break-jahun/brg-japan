import { patchAdvertisementAgreement } from '@/common/modules/api/agreeAdvertisement';
import { queryKeys } from '@/common/types/common';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePatchAdvertisementAgreement = () => {
  const queryClient = useQueryClient();

  return useMutation(patchAdvertisementAgreement, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.user);
    },
  });
};

export default usePatchAdvertisementAgreement;
