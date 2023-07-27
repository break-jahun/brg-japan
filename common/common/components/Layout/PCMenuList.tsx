import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from '@/common/components/Layout/NavigationHeader';

interface PCMenuListProps {
  menus: Menu[];
  isHovering?: boolean;
}

const PCMenuList = ({ menus, isHovering }: PCMenuListProps) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '40px',
      }}
    >
      {menus.map((menu) => {
        const { pathname } = router;
        const isActive =
          pathname.includes(menu.href as string) || pathname === '/';

        if (!menu.href) {
          return (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '105px',
              }}
              key={menu.name}
            >
              <Typography
                key={menu.name}
                fontWeight={700}
                color={isHovering ? 'black' : 'white'}
                sx={{
                  ...(!isActive && {
                    opacity: 0.7,
                  }),
                }}
              >
                {menu.name}
              </Typography>

              {isHovering && menu.subMenu && (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    marginTop: '16px',
                  }}
                >
                  {menu.subMenu.map((item) => {
                    if (item.href) {
                      return (
                        <SubMenuItem
                          key={item.name}
                          href={item.href}
                          name={item.name}
                        />
                      );
                    }
                    return null;
                  })}
                </Box>
              )}
            </Box>
          );
        }

        return (
          <Box width="105px" textAlign="center" key={menu.name}>
            <Link href={menu.href} passHref>
              <Typography
                fontWeight={700}
                color={isHovering ? 'black' : 'white'}
                sx={{
                  ...(!isActive && {
                    opacity: 0.7,
                  }),
                }}
              >
                {menu.name}
              </Typography>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default PCMenuList;

const SubMenuItem = ({
  key,
  href,
  name,
}: {
  key: string;
  href: string;
  name: string;
}) => {
  return (
    <Link href={href} passHref key={name}>
      <Typography key={key} fontWeight={500} color="#0000005C">
        {name}
      </Typography>
    </Link>
  );
};
