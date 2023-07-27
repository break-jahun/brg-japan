import MenuList, {
  Hrefs,
  MenuListType,
  SubmenuName,
} from '@/common/bridges/Header/MenuList';
import SubmenuBreadcrumbItem from '@/common/bridges/Header/PCMenu/Submenu/SubmenuBreadcrumbItem';
import { HStack } from '@/common/components/HStack';
import { Box, Breadcrumbs, Divider, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

interface SubmenuBreadcrumbProps {}

function SubmenuBreadcrumb() {
  const { pathname } = useRouter();

  const submenu = useMemo(() => {
    const targetMenu = MenuList.find(
      (menuItem) =>
        menuItem.submenu &&
        menuItem.submenu.some((submenuItem) => submenuItem.href === pathname)
    );
    if (targetMenu) {
      return targetMenu.submenu;
    }
    return [];
  }, [pathname]);

  if (!submenu || submenu.length === 0) {
    return <Box />;
  }

  return (
    <SubmenuBreadcrumbWrapper>
      <Breadcrumbs separator={<Separator />} aria-label="breadcrumb">
        {submenu.map((submenuItem) => (
          <SubmenuBreadcrumbItem
            key={submenuItem.name}
            href={submenuItem.href}
            name={submenuItem.name}
            isActive={submenuItem.href === pathname}
          />
        ))}
      </Breadcrumbs>
    </SubmenuBreadcrumbWrapper>
  );
}

const SubmenuBreadcrumbWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  padding: '12px 32px',
  boxShadow: 'rgb(0 0 0 / 10%) 0px 14px 6px -12px inset',
  overflowX: 'hidden',
  '& .MuiBreadcrumbs-ol': {
    width: 'max-content',
  },
  '& > nav': {
    overflow: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

const Separator = styled('span')({
  width: 1,
  height: 16,
  background: 'black',
  opacity: 0.2,
});

export default SubmenuBreadcrumb;
