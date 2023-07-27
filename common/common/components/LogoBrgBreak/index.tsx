import { HStack } from '@/common/components/HStack';

function LogoBrgBreak() {
  return (
    <HStack sx={{ gap: '24px' }}>
      <img
        src="/images/common/brg_logo_color.png"
        alt="brg logo"
        width="92px"
      />
      <img
        src="/images/common/break_logo_color.png"
        alt="break logo"
        width="144px"
      />
    </HStack>
  );
}

export default LogoBrgBreak;
