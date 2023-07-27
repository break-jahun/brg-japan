import { Box, styled } from '@mui/material';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';

export interface Menu {
  name: any;
  href?: string;
  subMenu?: Menu[];
}

export interface MenuListProps {
  menus: Menu[];
}

export const MainContainer = styled(Box)({
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 200,
});

export const NavigationLogoImage = styled('img')({
  cursor: 'pointer',
  width: '64px',
  height: '28px',
});

interface DimesionBoxProps {
  isOpen: boolean;
}

export const DimensionBox = styled(Box)(({ isOpen }: DimesionBoxProps) => ({
  background: isOpen ? 'white' : '#000000',
  opacity: isOpen ? '1' : '0.2',
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -10,
  transition: isOpen ? 'all ease 0.04s' : 'all ease 1s',
  transitionDelay: isOpen ? '0' : '0.16s',
}));

interface NewDimensionBoxProps {
  isColorChange: boolean;
}

export const NewDimensionBox = styled(Box)(
  ({ isColorChange }: NewDimensionBoxProps) => ({
    background: isColorChange ? 'white' : '#000',
    opacity: isColorChange ? '1' : '0.5',
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -10,
    boxShadow:
      '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  })
);

export const Container = styled(MaxWidthLayoutBox)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '18px 16px',
  height: '100%',

  [theme.breakpoints.up('sm')]: {
    padding: '18px 32px',
  },
}));
