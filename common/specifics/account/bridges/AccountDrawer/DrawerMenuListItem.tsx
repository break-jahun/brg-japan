import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { ReactNode, useMemo, useState } from 'react';

interface MenuListItemProps {
  icon?: ReactNode;
  title: string;
  to?: string;
  childrenItems?: MenuListItemProps[];
  expandable?: boolean;
}

const DrawerMenuListItem = ({
  icon,
  title,
  to,
  childrenItems,
  expandable = false,
}: MenuListItemProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const isActive = useMemo(() => {
    return router.pathname === to;
  }, [router, to]);
  const handleClick = () => {
    if (expandable) {
      setIsOpen(!isOpen);
    } else if (to) router.push(to);
  };
  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        sx={{
          padding: '16px',
          backgroundColor: isActive && !expandable ? 'gray_1' : 'none',
        }}
      >
        {icon && <ListItemIcon>{icon}</ListItemIcon>}

        {expandable ? (
          <Box
            width={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2">{title}</Typography>
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </Box>
        ) : (
          <Typography variant="body2">{title}</Typography>
        )}
      </ListItem>
      {expandable && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {childrenItems &&
              childrenItems.map((item) => {
                return (
                  <SubMenuListItem
                    title={item.title}
                    to={item.to}
                    key={item.title}
                  />
                );
              })}
          </List>
        </Collapse>
      )}
    </>
  );
};

const SubMenuListItem = ({
  icon,
  title,
  to,
  childrenItems,
  expandable = false,
}: MenuListItemProps) => {
  const router = useRouter();
  const isActive = useMemo(() => {
    return router.pathname === to;
  }, [router, to]);
  const handleClick = () => {
    if (to) router.push(to);
  };
  return (
    <ListItem
      sx={{ backgroundColor: isActive && !expandable ? 'gray_1' : 'none' }}
      button
      onClick={handleClick}
    >
      <Box m="auto">
        <Typography variant="body2">{title}</Typography>
      </Box>
    </ListItem>
  );
};

export default DrawerMenuListItem;
