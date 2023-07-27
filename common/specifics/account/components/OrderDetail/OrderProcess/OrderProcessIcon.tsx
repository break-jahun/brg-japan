import Gavel from '@mui/icons-material/Gavel';
import Home from '@mui/icons-material/Home';
import LocalShipping from '@mui/icons-material/LocalShipping';
import Payment from '@mui/icons-material/Payment';
import Pending from '@mui/icons-material/Pending';
import { styled } from '@mui/material';

interface OrderProcessIconProps {
  icon: string;
  active: boolean;
}

function OrderProcessIcon({ icon, active }: OrderProcessIconProps) {
  const icons: { [index: string]: React.ReactElement } = {
    PENDING: <Pending fill={active ? 'white' : '#646464'} />,
    PAYMENT_COMPLETE: <Payment />,
    DELIVERY_IN_PROGRESS: <LocalShipping />,
    DELIVERY_OUT_PROGRESS: <LocalShipping />,
    GRADING: <Gavel />,
    REHOLDER: <Gavel />,
    DELIVERY_COMPLETE: <Home />,
  };

  return <IconCircle isActive={active}>{icons[icon]}</IconCircle>;
}

interface IconCircleProps {
  isActive: boolean;
}
const IconCircle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ isActive }: IconCircleProps) => ({
  background: isActive
    ? 'linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)'
    : '#ffffff',
  zIndex: 1,
  color: isActive ? '#fff' : '#646464',
  width: 50,
  height: 50,
  borderRadius: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default OrderProcessIcon;
