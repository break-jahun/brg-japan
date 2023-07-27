/* eslint-disable no-restricted-globals */
import { serviceTypeState } from '@/common/modules/recoil/gradingOrder';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const PopupFailPage = () => {
  const serviceType = useRecoilValue(serviceTypeState);
  const pathname = serviceType === 'REHOLDER' ? 'reholder' : 'grading';

  useEffect(() => {
    alert('결제가 취소되었습니다.');
    window.opener.location.href = `${window.location.origin}/${pathname}/submit/payment`;
    self.close();
  }, [pathname]);

  return null;
};

export default PopupFailPage;
