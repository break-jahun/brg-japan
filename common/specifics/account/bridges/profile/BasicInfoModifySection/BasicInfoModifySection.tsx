import { useTranslation } from 'react-i18next';
import { Avatar, Box, Typography } from '@mui/material';
import TitledSection from '@/common/components/Account/TitledSection';
import useGetUserInfoQuery from '@/common/modules/apiHooks/useGetUserInfoQuery';
import PasswordkFormGroup from '@/specifics/account/bridges/profile/BasicInfoModifySection/PasswordFormGroup';

function useBasicInfoModifySectionParser() {
  const { t } = useTranslation();
  const sectionTitle = t('profile-1');

  const { data: userInfo } = useGetUserInfoQuery();

  return {
    userInfo,
    sectionTitle,
  };
}

function BasicInfoModifySection() {
  const { userInfo, sectionTitle } = useBasicInfoModifySectionParser();

  return (
    <TitledSection title={sectionTitle}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
        width="100%"
      >
        {userInfo && (
          <>
            <Avatar sx={{ width: 100, height: 100 }} src={userInfo.mbPhoto} />
            <Box mt={2}>
              <Typography color="textPrimary" variant="h6" fontWeight={700}>
                {userInfo.mbName}
              </Typography>
            </Box>
            <Typography color="textSecondary" variant="caption">
              {userInfo.mbEmail}
            </Typography>
            <Typography color="textSecondary" variant="caption">
              {userInfo.mbPhone}
            </Typography>

            <PasswordkFormGroup />
          </>
        )}
      </Box>
    </TitledSection>
  );
}

export default BasicInfoModifySection;
