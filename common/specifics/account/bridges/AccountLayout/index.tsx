import { VStack } from '@/common/components/VStack';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import MediaQuery from '@/common/components/MediaQuery';
import AccountDrawer from '@/specifics/account/bridges/AccountDrawer/index';

const AccountLayout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.gray_100 }}>
      <MediaQuery isMobile={false}>
        <AccountDrawer />
      </MediaQuery>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          paddingTop: '64px',
          display: 'flex',
          backgroundColor: 'gray_100',
          minHeight: 'calc(100vh - 64px)',
          [theme.breakpoints.up('sm')]: {
            width: 'calc(100vw - 220px)',
            marginLeft: '220px',
            paddingTop: '104px',
          },
        }}
      >
        <VStack
          sx={{
            padding: { xs: '80px 8px 8px', sm: '24px' },
          }}
          minHeight="100vh"
          width="100%"
        >
          <Box>
            {title && (
              <Typography fontWeight={700} variant="h6">
                {title}
              </Typography>
            )}
          </Box>
          <Box>{children}</Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AccountLayout;
