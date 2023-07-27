import { CurrencyType } from '@/common/types/grading/gradingOrder';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// gtag 사용을 위한 window object 확장
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/ban-types
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageView = (path: string) =>
  window.gtag?.('event', 'page_view', {
    page_title: path,
    조회페이지: path,
    send_to: GA_ID,
  });

/**
 * @remarks
 * certification 검색 이벤트를 tracking 하기 위한 데이터를 전송합니다.
 */
export const search = (serial: string) => {
  window.gtag?.('event', 'search', {
    serial,
  });
};

/**
 * @remarks
 * 그레이딩 '신청하기' 클릭 이벤트를 tracking 하기 위한 데이터를 전송합니다.
 */
export const clickSubmit = (path: string) => {
  window.gtag?.('event', 'click_submit', {
    page_title: path,
    진입페이지: path,
  });
};

interface PaymentCompleteParams {
  amount: number;
  currency: CurrencyType;
  serviceType: ServiceType;
  id: string;
}

/**
 * @remarks
 * 결제 완료 데이터를 전송합니다.
 */
export const paymentComplete = (params: PaymentCompleteParams) => {
  const { amount, currency, serviceType, id: transaction_id } = params;

  window.gtag?.('event', 'purchase', {
    amount,
    currency,
    serviceType,
    transaction_id,
  });
};

/**
 * @remarks
 * contact-us submit 이벤트를 tracking 하기 위한 데이터를 전송합니다.
 */
export const submitContactUs = (path: string) => {
  window.gtag?.('event', 'submit_contact', {
    경로: path,
  });
};
