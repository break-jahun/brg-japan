import {
  useQuery,
  useQueryClient,
  useMutation,
  UseQueryOptions,
} from '@tanstack/react-query';
import { queryKeys, ResponseType } from '@/common/types/common';
import {
  getAddress,
  postAddress,
  deleteAddress,
  updateAddress,
  updateGradingOrderAddress,
  updateReholderOrderAddress,
  updateDefaultAddress,
} from '@/common/modules/api/address';
import { AddressAttributes } from '@/common/types/user/address';
import { AxiosError } from 'axios';

export interface GetAddressResponse extends ResponseType {
  data: AddressAttributes[];
}

export const useAddressListQuery = (
  options?: UseQueryOptions<GetAddressResponse, AxiosError, AddressAttributes[]>
) =>
  useQuery<GetAddressResponse, AxiosError, AddressAttributes[]>(
    queryKeys.address,
    getAddress,
    {
      ...options,
      select: (response) => {
        return response.data;
      },
    }
  );

export const useAddressPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.address);
    },
  });
};

export const useAddressDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.address);
    },
  });
};

export const useAddressUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.address);
    },
  });
};

export const useDefaultAddressUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateDefaultAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.address);
    },
  });
};

export const useUpdateGradingOrderAddress = () => {
  return useMutation(updateGradingOrderAddress);
};

export const useUpdateReholderOrderAddress = () => {
  return useMutation(updateReholderOrderAddress);
};
