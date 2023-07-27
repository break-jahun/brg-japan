import dayjs from 'dayjs';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @remarks
 * 각종 데이트 관련 함수를 모아놓은 hook입니다.
 */
function useDateUtils() {
  const { t, i18n } = useTranslation();
  const dayText = useMemo((): string[] => {
    return [
      t('general/date/sun'),
      t('general/date/mon'),
      t('general/date/tue'),
      t('general/date/wed'),
      t('general/date/thu'),
      t('general/date/fri'),
      t('general/date/sat'),
    ];
  }, [t]);

  /**
   * @example
   * 3월 11일
   * 2022-03-11 (KST)
   */
  const getDate = useCallback(
    (date: string | undefined): string => {
      if (!date) {
        return t('general/undetermined');
      }
      if (i18n.language === 'en') {
        return dayjs(date).format('YYYY-MM-DD (KST)');
      }
      if (i18n.language === 'tw') {
        return dayjs(date).format(`M月 D日`);
      }
      return dayjs(date).format(`M월 D일`);
    },
    [i18n.language, t]
  );

  /**
   * @example
   * 3월 11일 (금)
   * 03-11 (FRI) (KST)
   */
  const getDateWithDay = useCallback(
    (date: string | undefined): string => {
      if (!date) {
        return t('general/undetermined');
      }
      if (i18n.language === 'en') {
        return `${dayjs(date).format('MM-DD')} (${
          dayText[dayjs(date).get('day')]
        }) (KST)`;
      }
      if (i18n.language === 'tw') {
        return `${dayjs(date).format('M月 D日')} (${
          dayText[dayjs(date).get('day')]
        })`;
      }
      return `${dayjs(date).format('M월 D일')} (${
        dayText[dayjs(date).get('day')]
      })`;
    },
    [dayText, i18n.language, t]
  );

  /**
   * @example
   * 3월 11일 (금) 19:22:12
   * 03-11 (FRI) 19:22:12
   */
  const getDateWithFullInfo = useCallback(
    (date: string | undefined): string => {
      if (!date) {
        return t('general/undetermined');
      }
      if (i18n.language === 'en') {
        return `${dayjs(date).format('MM-DD')} (${
          dayText[dayjs(date).get('day')]
        }) ${dayjs(date).format('HH:mm:ss')}`;
      }
      if (i18n.language === 'tw') {
        return `${dayjs(date).format('YYYY年 M月 D日')} (${
          dayText[dayjs(date).get('day')]
        }) ${dayjs(date).format('HH時 mm分 ss秒')}`;
      }
      return `${dayjs(date).format('YYYY년 M월 D일')} (${
        dayText[dayjs(date).get('day')]
      }) ${dayjs(date).format('HH시 mm분 ss초')}`;
    },
    [dayText, i18n.language, t]
  );

  /**
   * @example
   * 2022년 3월 22일 (금)
   * 2022-03-22 (FRI)
   */
  const getDateWithYear = useCallback(
    (date: string | undefined): string => {
      if (!date) {
        return t('general/undetermined');
      }
      if (i18n.language === 'en') {
        return `${dayjs(date).format('YYYY-MM-DD')} (${
          dayText[dayjs(date).get('day')]
        })`;
      }
      if (i18n.language === 'tw') {
        return `${dayjs(date).format('YYYY年 M月 D日')} (${
          dayText[dayjs(date).get('day')]
        })`;
      }
      return `${dayjs(date).format('YYYY년 M월 D일')} (${
        dayText[dayjs(date).get('day')]
      })`;
    },
    [dayText, i18n.language, t]
  );

  /**
   * @example
   * 2022년 3월 22일
   * 2022-03-22 (KST)
   */
  const getDateWithYMD = useCallback(
    (date: string | undefined): string => {
      if (!date) {
        return t('general/undetermined');
      }
      if (i18n.language === 'en') {
        return `${dayjs(date).format('YYYY-MM-DD (KST)')}`;
      }
      if (i18n.language === 'tw') {
        return `${dayjs(date).format('YYYY年 M月 D日')} (${
          dayText[dayjs(date).get('day')]
        })`;
      }
      return `${dayjs(date).format('YYYY년 M월 D일')} (${
        dayText[dayjs(date).get('day')]
      })`;
    },
    [dayText, i18n.language, t]
  );

  /**
   * @example
   * 2021년 9월 2일 (목) 12:05
   * 2022-03-22 (FRI) 12:05 (KST)
   */
  const getDateWithYMDHm = useCallback(
    (date: string | undefined): string => {
      if (!date) {
        return t('general/undetermined');
      }
      if (i18n.language === 'en') {
        return `${dayjs(date).format('YYYY-MM-DD')} (${
          dayText[dayjs(date).get('day')]
        }) ${dayjs(date).format('HH:mm')} (KST)`;
      }
      if (i18n.language === 'tw') {
        return `${dayjs(date).format('YYYY年 M月 D日')} (${
          dayText[dayjs(date).get('day')]
        }) ${dayjs(date).format('HH:mm')}`;
      }
      return `${dayjs(date).format('YYYY년 M월 D일')} (${
        dayText[dayjs(date).get('day')]
      }) ${dayjs(date).format('HH:mm')}`;
    },
    [dayText, i18n.language, t]
  );

  return {
    getDate,
    getDateWithDay,
    getDateWithFullInfo,
    getDateWithYMD,
    getDateWithYMDHm,
    getDateWithYear,
  };
}

export default useDateUtils;
