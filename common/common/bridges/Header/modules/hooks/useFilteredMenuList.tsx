import MenuList from '@/common/bridges/Header/MenuList';
import useCheckLoginQuery from '@/common/modules/hooks/useCheckLoginQuery';
import { useMediaQuery, useTheme } from '@mui/material';
import { useMemo } from 'react';

interface useFilteredMenuListProps {}

/**
 * @remarks 로그인유무에 따라 다른 메뉴를 만들어주는 hook 입니다.
 */
function useFilteredMenuList() {
  const { data: isLogin = false } = useCheckLoginQuery();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredMenuList = useMemo(() => {
    const menuList = !isMobile
      ? MenuList
      : MenuList.filter((menu) => menu.name !== 'LANGUAGE');

    if (isLogin) {
      return menuList.filter(
        (menuItem) => menuItem.name !== 'LOG IN' && menuItem.name !== 'SIGN UP'
      );
    }
    return menuList.filter((menuItem) => menuItem.name !== 'MY PAGE');
  }, [isLogin, isMobile]);

  return filteredMenuList;
}

export default useFilteredMenuList;
