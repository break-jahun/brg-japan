import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import * as Sentry from '@sentry/react';
import { useSetRecoilState } from 'recoil';
import { imagesState } from '@/common/modules/recoil/image';
import image, { UploadImage } from '../api/image';

/**
 * @remarks
 * 이미지 파일을 업로드 하고 업로드한 이미지 url 을 리턴받는 뮤테이션입니다.
 */
export function useUploadImageMutation(): UseMutationResult<
  UploadImage,
  AxiosError,
  File
> {
  const { t } = useTranslation();
  const setImages = useSetRecoilState(imagesState);

  return useMutation(image.uploadImage, {
    onSuccess: (response) => {
      const imageId = response.data?.id;
      const imageUrl = response.data?.url;

      if (imageId && imageUrl) {
        setImages((prev) => [...prev, { id: imageId, url: imageUrl }]);
      } else {
        alert(t('general/upload-failed'));
      }
    },
    onError: (error: AxiosError) => {
      alert(t('general/upload-failed'));
      Sentry.captureException(error);
    },
  });
}
