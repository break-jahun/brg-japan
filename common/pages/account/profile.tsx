import { GNBLayout } from '@/common/bridges/Layout';
import MediaQuery from '@/common/components/MediaQuery';
import AccountLayout from '@/specifics/account/bridges/AccountLayout/index';
import AdditionalInfoSection from '@/specifics/account/bridges/profile/AdditionalInfoSection/AdditionalInfoSection';
import BasicInfoModifySection from '@/specifics/account/bridges/profile/BasicInfoModifySection/BasicInfoModifySection';
import { Box } from '@mui/material';

function ProfilePage() {
  return (
    <GNBLayout>
      <AccountLayout title="MY PROFILE">
        <MediaQuery isMobile>
          <BasicInfoModifySection />
          <AdditionalInfoSection />
        </MediaQuery>

        <MediaQuery isMobile={false}>
          <Box display="flex" flexDirection="row">
            <Box width={0.4}>
              <BasicInfoModifySection />
            </Box>
            <Box width={0.6}>
              <AdditionalInfoSection />
            </Box>
          </Box>
        </MediaQuery>
      </AccountLayout>
    </GNBLayout>
  );
}
export default ProfilePage;
