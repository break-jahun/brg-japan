import { AxiosError } from 'axios';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import auth from '@/common/modules/api/auth';
import { queryKeys } from '@/common/types/common';
import { CheckMemberStatusResponseType } from '@/common/types/user/auth';

/**
 * @remarks
 * 사용자의 status를 가져오는 쿼리입니다
 *
 */
function useMemberStatusQuery(
  email: string,
  options?: UseQueryOptions<CheckMemberStatusResponseType, AxiosError>
): UseQueryResult<CheckMemberStatusResponseType, AxiosError> {
  return useQuery<CheckMemberStatusResponseType, AxiosError>(
    queryKeys.memberStatus(email),
    () => auth.checkMemberStatus(email),
    options
  );
}
export default useMemberStatusQuery;
