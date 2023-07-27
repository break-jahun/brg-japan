import useAccountDrawerParser from '@/specifics/account/modules/hooks/useAccountDrawerParser';
import ProfileSummary from '@/specifics/account/bridges/AccountDrawer/ProfileSummary';
import { Drawer, Divider, Box } from '@mui/material';
import DrawerMenuListItem from '@/specifics/account/bridges/AccountDrawer/DrawerMenuListItem';

function AccountDrawer() {
  const { menuItems } = useAccountDrawerParser();
  return (
    <Box component="nav">
      <Drawer
        PaperProps={{
          sx: {
            top: { xs: '64px', sm: '104px' },
            position: 'fixed',
            width: '220px',
            zIndex: 10,
          },
        }}
        variant="permanent"
        open
      >
        <ProfileSummary />
        <Divider />
        {menuItems.map((menuItem) => {
          return (
            <DrawerMenuListItem
              key={menuItem.title}
              icon={menuItem.icon}
              title={menuItem.title}
              to={menuItem.to}
              childrenItems={menuItem.children}
              expandable={Boolean(menuItem.children)}
            />
          );
        })}
      </Drawer>
    </Box>
  );
}

export default AccountDrawer;
