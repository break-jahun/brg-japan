import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TitledSection from '@/common/components/Account/TitledSection';
import useAddress from '@/common/modules/hooks/useAddress';
import EmailAndPhoneInfoGroup from '@/specifics/account/bridges/profile/AdditionalInfoSection/EmailAndPhoneInfoGroup';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import AddressInfoGroup from '@/specifics/account/bridges/profile/AdditionalInfoSection/AddressInfoGroup';
import DeleteMemberButton from '@/specifics/account/bridges/profile/AdditionalInfoSection/DeleteMemberButton';
import AgreeAdvertisementGroup from '@/specifics/account/bridges/profile/AdditionalInfoSection/AgreeAdvertisementGroup';

function useBasicInfoModifySectionParser() {
  const { t } = useTranslation();
  const sectionTitle = t('account/profile/more-info');

  const { data: userInfo } = useGetUserInfoQuery();
  const { defaultAddress, defaultKeys: defaultAddressKeys } = useAddress();

  const mbInfo = {
    name: userInfo ? userInfo.mbName : '',
    email: userInfo ? userInfo.mbEmail : '',
    phone: userInfo && userInfo.mbPhone ? userInfo.mbPhone : '',
  };

  const isAgreeAdvertisement = userInfo?.isAgreeAdvertisement || false;

  return {
    userInfo,
    sectionTitle,
    mbInfo,
    defaultAddress,
    defaultAddressKeys,
    isAgreeAdvertisement,
  };
}

function AdditionalInfoSection() {
  const { userInfo, sectionTitle, mbInfo, isAgreeAdvertisement } =
    useBasicInfoModifySectionParser();

  return (
    <TitledSection title={sectionTitle}>
      {userInfo && (
        <Box>
          <EmailAndPhoneInfoGroup mbInfo={mbInfo} />
          <AddressInfoGroup />
          <AgreeAdvertisementGroup
            isAgreeAdvertisement={isAgreeAdvertisement}
          />
          <DeleteMemberButton />
        </Box>
      )}
    </TitledSection>
  );
}
export default AdditionalInfoSection;
