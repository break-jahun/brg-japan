import { Box } from '@mui/material';
import Link from 'next/link';
import { ReactChild } from 'react';
import * as gtag from '@/common/utils/ga';
import { useRouter } from 'next/router';

function GradingLinkButton({
  children,
  link,
}: {
  children: ReactChild;
  link: string;
}) {
  const router = useRouter();

  const handleClickSubmit = () => {
    gtag.clickSubmit(router.pathname);
  };

  return (
    <Link href={link} passHref>
      <Box
        onClick={handleClickSubmit}
        sx={(theme) => ({
          width: '100%',
          backgroundColor: theme.palette.white,
          color: theme.palette.secondary_20,
          borderRadius: '50px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          boxShadow:
            '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          padding: '10px 20px',

          [theme.breakpoints.up('sm')]: {
            width: 'auto',
          },
        })}
      >
        {children}
      </Box>
    </Link>
  );
}

export default GradingLinkButton;
