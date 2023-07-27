import { serviceTypeState } from '@/common/modules/recoil/gradingOrder';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const CancelPage = () => {
  const serviceType = useRecoilValue(serviceTypeState);
  const pathname = serviceType === 'REHOLDER' ? 'reholder' : 'grading';

  useEffect(() => {
    alert('결제가 취소되었습니다.');
    window.location.href = `${window.location.origin}/${pathname}/submit/payment`;
  }, [pathname]);
  return null;
};

export default CancelPage;
