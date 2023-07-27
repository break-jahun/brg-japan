import MenuList from '@/common/bridges/Header/MenuList';
import MenuAccordionWrapper from '@/common/bridges/Header/MobileMenu/MenuAccordionWrapper';
import SubmenuItem from '@/common/bridges/Header/MobileMenu/SubMenu/SubmenuItem';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface SubMenuAccordionProps {
  isActive: boolean;
  menuText: string;
  submenu?: typeof MenuList[number]['submenu'];
}

function SubMenuAccordion(props: SubMenuAccordionProps) {
  const { isActive, menuText, submenu = [] } = props;
  const { pathname } = useRouter();

  const [isExpanded, setIsExpanded] = useState(isActive);
  const handleChange = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <MenuAccordionWrapper>
      <Accordion expanded={isExpanded} onChange={handleChange}>
        <AccordionSummary>
          <Typography
            variant="body2"
            color={(theme) => (isActive ? theme.palette.primary.main : 'black')}
            fontWeight={700}
            letterSpacing={0.5}
          >
            {menuText}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {submenu.map((menuItem) => (
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

export default SubMenuAccordion;
