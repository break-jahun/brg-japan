import TitledSection from '@/common/components/Account/TitledSection';
import { CommonButton } from '@/common/components/Button';
import ObjectTable from '@/common/components/ObjectTable';
import useObjectTable from '@/common/components/ObjectTable/useObjectTable';
import useAddress from '@/common/modules/hooks/useAddress';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import { Avatar, Box, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function useBasicInfoModifySectionParser() {
  const { data: userInfo } = useGetUserInfoQuery();
  const { t } = useTranslation();
  const text = {
    sectionTitle: t('profile-11'),
    button: t('change-1'),
    currentPassword: t('profile-2'),
    newPassword: t('profile-3'),
    confirmPassword: t('profile-4'),
    passwordRule: t('profile-5'),
    changeAndAuthPhone: t('profile-15'),
    manageAddress: t('profile-17'),
  };

  const { item: mbItem, keys: mbKeys } = useObjectTable({
    item: {
      mbName: '관리자',
      phone: '010-5610-9712',
      email: 'ad@break.co.kr',
    },
    keys: [
      {
        text: '이름',
        value: 'mbName',
      },
      {
        text: '이메일',
        value: 'email',
      },
      {
        text: '전화번호',
        value: 'phone',
      },
    ],
  });
  const { defaultAddress, defaultKeys: defaultAddressKeys } = useAddress();
  return {
    userInfo,
    text,
    mbItem,
    mbKeys,
    defaultAddress,
    defaultAddressKeys,
  };
}

function AdditionalInfoSection() {
  const { userInfo, text, mbItem, mbKeys, defaultAddress, defaultAddressKeys } =
    useBasicInfoModifySectionParser();
  return (
    <TitledSection title={text.sectionTitle}>
      <Box p={2}>
        <ObjectTable item={mbItem} keys={mbKeys} />
        <Box mt={1}>
          <CommonButton buttonType="GRAY" fullWidth>
            {text.changeAndAuthPhone}
          </CommonButton>
        </Box>
      </Box>

      <Box p={2}>
        {defaultAddress && (
          <ObjectTable item={defaultAddress as any} keys={defaultAddressKeys} />
        )}

        <Box mt={1}>
          <CommonButton buttonType="GRAY" fullWidth>
            {text.manageAddress}
          </CommonButton>
        </Box>
      </Box>
      <Box textAlign="center">
        <CommonButton buttonType="OUTLINED">회원탈퇴</CommonButton>
      </Box>
    </TitledSection>
  );
}
export default AdditionalInfoSection;
