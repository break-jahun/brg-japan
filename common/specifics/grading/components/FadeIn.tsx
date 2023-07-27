import { Fade } from '@mui/material';
import useTriggerFadeIn from '@/specifics/grading/modules/hooks/useTriggerFadeIn';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactElement;
  timeout?: number;
}

function FadeIn({ children, timeout = 1500 }: FadeInProps) {
  const target = useRef<HTMLDivElement | null>(null);
  const isFade = useTriggerFadeIn(target);
  return (
    <Fade ref={target} in={isFade} timeout={timeout}>
      {children}
    </Fade>
  );
}

export default FadeIn;
