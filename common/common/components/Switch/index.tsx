import { styled } from '@mui/material';

interface Props {
  isChecked: boolean;
  onToggleAgreement?: () => void;
}

const Switch = ({ isChecked, onToggleAgreement }: Props) => {
  return (
    <Container onClick={onToggleAgreement} isChecked={isChecked}>
      <Circle isChecked={isChecked} />
    </Container>
  );
};

export default Switch;

interface StyleType {
  isChecked?: boolean;
}

const Container = styled('div')<StyleType>(({ theme, isChecked }) => ({
  position: 'relative',
  border: isChecked ? 'none' : `1px solid ${theme.palette.grey[400]}`,
  width: '36px',
  height: '20px',
  borderRadius: '32px',
  cursor: 'pointer',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: isChecked
    ? theme.palette.secondary_20
    : theme.palette.gray_400,
}));

const Circle = styled('div')<StyleType>(({ theme, isChecked }) => ({
  transition: 'left 0.2s ease',
  width: isChecked ? '13px' : '12px',
  height: isChecked ? '13px' : '12px',
  borderRadius: '50%',
  position: 'absolute',
  top: isChecked ? '3.5px' : '3px',
  left: isChecked ? '19px' : '3px',
  backgroundColor: isChecked
    ? theme.palette.secondary_90
    : theme.palette.gray_100,
}));
