import client from '@/common/modules/client';
import clientNew from '@/common/modules/clientNew';
import { ResponseType } from '@/common/types/common';

export interface ChangePasswordBody {
  mbCurrentPw: string;
  mbNewPw: string;
}

export interface ChangePasswordResponse extends ResponseType {
  data: Array<number>;
}

async function changePassword(
  body: ChangePasswordBody
): Promise<ChangePasswordResponse> {
  const { data } = await client.put<ChangePasswordResponse>(
    '/api/member/changePw',
    body
  );
  return data;
}

export interface DeleteMemberResponse extends ResponseType {
  data: Array<number>;
}

async function deleteMember(): Promise<DeleteMemberResponse> {
  const { data } = await clientNew.post('/api/member/withdraw');
  return data;
}

export default { changePassword, deleteMember };
