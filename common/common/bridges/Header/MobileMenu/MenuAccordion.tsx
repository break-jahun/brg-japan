import MenuList from '@/common/bridges/Header/MenuList';
import MenuAccordionWrapper from '@/common/bridges/Header/MobileMenu/MenuAccordionWrapper';
import SubmenuItem from '@/common/bridges/Header/MobileMenu/SubMenu/SubmenuItem';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  styled,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type MenuAccordionProps = typeof MenuList[number] & { isActive: boolean };

function MenuAccordion(props: MenuAccordionProps) {
  const { isActive, name, submenu } = props;
  const { pathname } = useRouter();
  const [isExpanded, setIsExpanded] = useState(isActive);
  const handleChange = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <MenuAccordionWrapper>
      <Accordion expanded={isExpanded} onChange={handleChange}>
        <AccordionSummary>
          <Box
            sx={{
              backgroundImage: isActive
                ? 'linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)'
                : 'none',
            }}
            padding="12px 8px"
            borderRadius={0}
            width={1}
          >
            <Typography
              variant="body1"
              color={isActive ? 'white' : 'black'}
              fontWeight={700}
              letterSpacing={0}
            >
              {name}
            </Typography>
          </Box>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          {submenu &&
            submenu.map((menuItem) => (
              <SubmenuItem
                key={menuItem.name}
                href={menuItem.href}
                isActive={menuItem.href === pathname}
                menuText={menuItem.name}
                icon={menuItem.icon}
                submenu={menuItem.submenu}
              />
            ))}
        </AccordionDetails>
      </Accordion>
    </MenuAccordionWrapper>
  );
}

export default MenuAccordion;
