import client from '@/common/modules/client';

export interface UploadImage extends Response {
  data?: { url: string; id: number };
}

export type FileUsedAt =
  | 'VSC'
  | 'ORDER_CONFIRM'
  | 'ORDER_CONFIRM_ADMIN'
  | 'DEFECT_CHECK'
  | 'CASING'
  | 'FRONT_PHOTO'
  | 'BACK_PHOTO'
  | 'COMPLETE_PHOTO';

/**
 * @remarks
 * 이미지를 업로드하고 url을 리턴받는 함수입니다.
 *
 * @returns 사용자의 정보
 */
async function uploadImage(file: File): Promise<UploadImage> {
  const usedAt: FileUsedAt = 'ORDER_CONFIRM';
  const body = new FormData();
  body.append('file', file);
  body.append('usedAt', usedAt);
  const { data } = await client.post<UploadImage>(
    '/api/fileInfo/uploadImage',
    body
  );
  return data;
}

export default {
  uploadImage,
};
