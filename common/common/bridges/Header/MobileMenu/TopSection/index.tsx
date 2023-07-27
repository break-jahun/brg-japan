import BreakLogo from '@/common/bridges/Header/MobileMenu/TopSection/BreakLogo';
import Profile from '@/common/bridges/Header/MobileMenu/TopSection/Profile';
import useCheckLoginQuery from '@/common/modules/hooks/useCheckLoginQuery';
import React from 'react';

interface TopSectionProps {}

function TopSection() {
  const { data: isLogin = false } = useCheckLoginQuery();

  return isLogin ? <Profile /> : <BreakLogo />;
}

export default TopSection;
