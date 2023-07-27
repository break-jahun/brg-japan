import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useState } from 'react';

interface Menu {
  name: string;
  href?: string;
  subMenu?: Menu[];
}

interface Props {
  menu: Menu;
  handleClose: () => void;
}

export const BrgMobileMenuItem = ({ menu, handleClose }: Props) => {
  const router = useRouter();

  return (
    <Link href={menu.href as string} passHref key={menu.name}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between' }}
        onClick={handleClose}
      >
        <Typography
          color="secondary_20"
          variant="h6"
          fontWeight={router.asPath === menu.href ? 700 : 500}
        >
          {menu.name}
        </Typography>
        <KeyboardArrowRightRoundedIcon sx={{ opacity: 0.36, color: 'black' }} />
      </Box>
    </Link>
  );
};

export const BrgMobileNestedMenuItem = ({ menu, handleClose }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between' }}
        onClick={handleClick}
      >
        <Typography
          color="secondary_20"
          variant="h6"
          fontWeight={router.asPath === menu.href ? 700 : 500}
        >
          {menu.name}
        </Typography>
        {isOpen ? (
          <KeyboardArrowUpRoundedIcon sx={{ opacity: 0.36, color: 'black' }} />
        ) : (
          <KeyboardArrowDownRoundedIcon
            sx={{ opacity: 0.36, color: 'black' }}
          />
        )}
      </Box>
      {isOpen && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            paddingTop: '16px',
          }}
        >
          {menu.subMenu?.map((subMenu) => (
            <Link href={subMenu.href as string} passHref key={subMenu.name}>
              <Typography variant="subtitle1" onClick={handleClose}>
                {subMenu.name}
              </Typography>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};
