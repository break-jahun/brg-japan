import MenuList from '@/common/bridges/Header/MenuList';
import { Box, Button, styled, Typography } from '@mui/material';
import Link from 'next/link';

interface MenuItemProps {
  isActive: boolean;
  menuText: string;
  href: (typeof MenuList)[number]['href'];
}

function MenuItem(props: MenuItemProps) {
  const { isActive, menuText, href = '/home' } = props;
  return (
    <Box
      sx={{
        backgroundImage: isActive
          ? 'linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)'
          : 'none',
      }}
      padding="12px 8px"
      borderRadius={0}
    >
      <Link href={href} passHref>
        <Typography
          variant="body1"
          color={isActive ? 'white' : 'black'}
          fontWeight={700}
          letterSpacing={0}
        >
          {menuText}
        </Typography>
      </Link>
    </Box>
  );
}

export default MenuItem;
