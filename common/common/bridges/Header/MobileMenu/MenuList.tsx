import MenuAccordion from '@/common/bridges/Header/MobileMenu/MenuAccordion';
import useFilteredMenuList from '@/common/bridges/Header/modules/hooks/useFilteredMenuList';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import MenuItem from '@/common/bridges/Header/MobileMenu/MenuItem';

interface MenuListProps {}

function MenuList() {
  const { pathname } = useRouter();
  const filteredMenuList = useFilteredMenuList();

  return (
    <Box paddingLeft="8px">
      {filteredMenuList.map((menuItem) =>
        menuItem.submenu ? (
          <MenuAccordion
            key={menuItem.name}
            {...menuItem}
            isActive={menuItem.submenu.some(
              (submenu) => submenu.href === pathname
            )}
          />
        ) : (
          <MenuItem
            key={menuItem.name}
            href={menuItem.href}
            isActive={menuItem.href === pathname}
            menuText={menuItem.name}
          />
        )
      )}
    </Box>
  );
}

export default MenuList;
