import { Hrefs, SubmenuName } from '@/common/bridges/Header/MenuList';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';

interface SubmenuBreadcrumbItemProps {
  isActive: boolean;
  name: (typeof SubmenuName)[number];
  href: (typeof Hrefs)[number];
}

function SubmenuBreadcrumbItem(props: SubmenuBreadcrumbItemProps) {
  const { href, name, isActive } = props;
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Link href={href} passHref>
      <Typography
        variant={isUpSm ? 'body1' : 'caption'}
        fontWeight={isActive ? 700 : 400}
        letterSpacing={0.5}
        sx={{
          color: (themeParam) =>
            isActive ? themeParam.palette.primary.main : '#212121',
        }}
      >
        {name}
      </Typography>
    </Link>
  );
}

export default SubmenuBreadcrumbItem;
