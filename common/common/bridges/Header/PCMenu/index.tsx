import { Hrefs } from '@/common/bridges/Header/MenuList';
import useFilteredMenuList from '@/common/bridges/Header/modules/hooks/useFilteredMenuList';
import MenuItem from '@/common/bridges/Header/PCMenu/MenuItem';
import Profile from '@/common/bridges/Header/PCMenu/Profile';
import { HStack } from '@/common/components/HStack';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

interface PCMenuProps {}

function PCMenu() {
  const { pathname } = useRouter();
  const filteredMenuList = useFilteredMenuList();

  return (
    <HStack>
      {filteredMenuList.map((menuItem) =>
        menuItem.render ? (
          <Box key={menuItem.name}>{menuItem.render}</Box>
        ) : (
          <MenuItem
            key={menuItem.name}
            href={menuItem.href}
            isActive={
              menuItem.submenu
                ? menuItem.submenu
                    .map((submenu) => submenu.href)
                    .includes(pathname as typeof Hrefs[number])
                : menuItem.href === pathname
            }
            menuText={menuItem.name}
          />
        )
      )}
    </HStack>
  );
}

export default PCMenu;
