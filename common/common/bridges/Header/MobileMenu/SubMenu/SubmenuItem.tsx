import MenuList from '@/common/bridges/Header/MenuList';
import MenuAccordionWrapper from '@/common/bridges/Header/MobileMenu/MenuAccordionWrapper';
import SubMenuAccordion from '@/common/bridges/Header/MobileMenu/SubMenu/SubmenuAccordion';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from '@mui/material';
import Link from 'next/link';

interface SubmenuItemProps {
  isActive: boolean;
  menuText: string;
  href: (typeof MenuList)[number]['href'];
  icon?: React.ReactNode;
  submenu?: (typeof MenuList)[number]['submenu'];
}

function SubmenuItem(props: SubmenuItemProps) {
  const { isActive, menuText, href = '/', icon, submenu } = props;

  return (
    <Box
      padding={`12px ${icon ? '10px' : '16px'}`}
      borderRadius={0}
      sx={{
        background: isActive ? '#fafafa' : 'none',
      }}
      display="flex"
    >
      {icon && (
        <IconWrapper isActive={isActive} marginRight={1}>
          {icon}
        </IconWrapper>
      )}

      {submenu ? (
        <SubMenuAccordion
          isActive={isActive}
          menuText={menuText}
          submenu={submenu}
        />
      ) : (
        <Link href={href} passHref>
          <Typography
            variant="body2"
            color={(theme) => (isActive ? theme.palette.primary.main : 'black')}
            fontWeight={700}
            letterSpacing={0.5}
          >
            {menuText}
          </Typography>
        </Link>
      )}
    </Box>
  );
}

const IconWrapper = styled(Box)<{ isActive: boolean }>`
  ${({ isActive, theme }) =>
    isActive &&
    `
    path {
      fill: ${theme.palette.primary.main};
    }
  `}
`;

export default SubmenuItem;
