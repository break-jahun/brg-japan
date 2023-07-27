import useHeaderLight from '@/common/bridges/Header/modules/hooks/useHeaderLight';
import MenuList from '@/common/bridges/Header/MenuList';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

interface MenuItemProps {
  isActive: boolean;
  menuText: string;
  href: (typeof MenuList)[number]['href'];
}

function MenuItem(props: MenuItemProps) {
  const { isActive, menuText, href = '/home' } = props;
  const isHeaderLight = useHeaderLight();

  return (
    <Box
      borderBottom={isActive ? '3px solid #6c35bd' : 'none'}
      padding="6px 8px"
      sx={{
        ':hover': {
          opacity: 0.6,
        },
      }}
    >
      <Link href={href} passHref>
        <Typography
          variant="body2"
          color={isHeaderLight ? 'black' : 'white'}
          fontWeight={700}
          letterSpacing={1}
        >
          {menuText}
        </Typography>
      </Link>
    </Box>
  );
}

export default MenuItem;
