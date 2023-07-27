import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import { SUPPORT_REGION_ID } from '@/constants/SUPPORT_REGION_ID';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface Props {
  children: JSX.Element[] | JSX.Element;
  currentServiceRegionId: number;
}

const CheckMemberRegionProvider = ({
  children,
  currentServiceRegionId,
}: Props) => {
  const router = useRouter();
  const { data } = useGetUserInfoQuery();
  const { t } = useTranslation();

  if (!data) {
    return null;
  }
  const isForeignUser = data.supportRegionId !== currentServiceRegionId;

  // if (isForeignUser) {
  //   const country = Object.keys(SUPPORT_REGION_ID).find(
  //     (key) =>
  //       SUPPORT_REGION_ID[key as keyof typeof SUPPORT_REGION_ID] ===
  //       currentServiceRegionId
  //   );

  //   alert(t('특정국가계정주문진행불가안내', { country }));

  //   router.back();

  //   return null;
  // }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default CheckMemberRegionProvider;
