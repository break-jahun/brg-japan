import { GNBLayout } from '@/common/bridges/Layout';
import TitledSection from '@/common/components/Account/TitledSection';
import MediaQuery from '@/common/components/MediaQuery';
import ProfileSummary from '@/specifics/account/bridges/AccountDrawer/ProfileSummary';
import AccountLayout from '@/specifics/account/bridges/AccountLayout/index';
import DeliveryAddressSection from '@/specifics/account/bridges/dashboard/DeliveryAddressSection';
import DeliverySummarySection from '@/specifics/account/bridges/dashboard/DeliverySummarySection';
import { useTranslation } from 'react-i18next';

function DashboardPage() {
  return (
    <GNBLayout>
      <AccountLayout title="MY PAGE">
        <MediaQuery isMobile>
          <BasicInfoSection />
        </MediaQuery>
        <DeliverySummarySection />
        <DeliveryAddressSection />
      </AccountLayout>
    </GNBLayout>
  );
}
export default DashboardPage;

const BasicInfoSection = () => {
  const { t } = useTranslation();
  return (
    <TitledSection title={t('general/basic-info')}>
      <ProfileSummary />
    </TitledSection>
  );
};
