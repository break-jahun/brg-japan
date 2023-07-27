import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import Collections from '@mui/icons-material/Collections';
import Dashboard from '@mui/icons-material/Dashboard';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Person from '@mui/icons-material/Person';
import ViewList from '@mui/icons-material/ViewList';
import { MenuItemType } from '@/common/types/global/menuItems';

export const ACCOUNT_PATHNAME = {
  dashboard: '/account/dashboard',
  profile: '/account/profile',
  orderList: '/account/orderList',
  grading: '/account/collection/grading',
  logout: '/logout',
} as const;

export type AccountPathname =
  typeof ACCOUNT_PATHNAME[keyof typeof ACCOUNT_PATHNAME];

function useAccountDrawerParser() {
  const { t } = useTranslation();
  const menuItems: MenuItemType[] = useMemo(() => {
    return [
      {
        icon: <Dashboard />,
        title: t('general/dash-board'),
        to: ACCOUNT_PATHNAME.dashboard,
      },
      {
        icon: <Person />,
        title: t('general/profile'),
        to: ACCOUNT_PATHNAME.profile,
      },
      {
        icon: <ViewList />,
        title: t('grading/order/complete/payment-list'),
        to: ACCOUNT_PATHNAME.orderList,
      },
      {
        icon: <Collections />,
        title: t('general/collection'),
        children: [
          {
            title: t('general/portfolio'),
            to: ACCOUNT_PATHNAME.grading,
          },
        ],
      },
      {
        icon: <ExitToApp />,
        title: t('general/logout'),
        to: ACCOUNT_PATHNAME.logout,
      },
    ];
  }, [t]);
  return { menuItems };
}

export default useAccountDrawerParser;
