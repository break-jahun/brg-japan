import { AffiliatedLinkType } from '@/common/types/affiliatedShop';

export function getLinkTypeInKorean(
  linkType: AffiliatedLinkType,
  language: string
): string {
  switch (linkType) {
    case 'ONLINE_SHOP':
      if (language === 'en') return 'Online Shop';
      return '온라인샵';
    case 'NAVER_CAFE':
      if (language === 'en') return 'Naver Cafe';
      return '네이버 카페';
    case 'FACEBOOK':
      if (language === 'en') return 'facebook';
      return '페이스북';
    case 'NAVER_BLOG':
      if (language === 'en') return 'Naver Blog';
      return '네이버 블로그';
    case 'NAVER_SHOP':
      if (language === 'en') return 'Naver Shop';
      return '네이버샵';
    case 'AFREECA':
      if (language === 'en') return 'AfreecaTV';
      return '아프리카TV';
    case 'ETC':
      if (language === 'en') return 'ETC';
      return '기타';
    default:
      return '';
  }
}

export function getSortOrderByLanguage(language: string): 'asc' | 'desc' {
  switch (language) {
    case 'en':
      return 'desc';
    case 'ko':
      return 'asc';
    default:
      return 'asc';
  }
}

export function getEnglishProvince(province: string): string {
  switch (province) {
    case '강원도':
      return 'Gangwon-do';
    case '경기도':
      return 'Gyeonggi-do';
    case '경상남도':
      return 'Gyeongsangnam-do';
    case '경상북도':
      return 'Gyeongsangbuk-do';
    case '광주광역시':
      return 'Gwangju';
    case '대구광역시':
      return 'Daegu';
    case '대전광역시':
      return 'Daejeon';
    case '부산광역시':
      return 'Busan';
    case '서울특별시':
      return 'Seoul';
    case '울산광역시':
      return 'Ulsan';
    case '인천광역시':
      return 'Incheon';
    case '전라남도':
      return 'Jeollanam-do';
    case '전라북도':
      return 'Jeollabuk-do';
    case '제주도':
      return 'Jeju-do';
    case '충청남도':
      return 'Chungcheongnam-do';
    case '충청북도':
      return 'Chungcheongbuk-do';
    default:
      return province;
  }
}

export function getProvinceOrderNumber(
  province: string,
  language: string
): number {
  const orders: {
    [keyLanguage: string]: {
      [keyProvince: string]: number;
    };
  } = {
    en: {
      Hyogo: 1,
      Singapore: 2,
      전라북도: 3,
      광주광역시: 4,
      'JAPAN OSAKA': 5,
      'JAPAN NAGOYA': 6,
      Kowloon: 7,
      '台北市(Taipei)': 8,
      '新北市(New Taipei)': 9,
      '桃園市(Taoyuan)': 10,
      '台中市(Taichung)': 11,
      '彰化縣(Changhua)': 12,
      '台南市(Tainan)': 13,
      '高雄市(Kaohsiung)': 14,
      '花蓮市(Hualien)': 15,
      서울특별시: 16,
      부산광역시: 17,
      인천광역시: 18,
      경기도: 19,
      경상남도: 20,
      대전광역시: 21,
      대구광역시: 22,
    },
    ko: {
      'JAPAN NAGOYA': 1,
      'JAPAN OSAKA': 2,
      Hyogo: 3,
      Singapore: 4,
      전라북도: 5,
      광주광역시: 6,
      서울특별시: 7,
      부산광역시: 8,
      인천광역시: 9,
      경기도: 10,
      경상남도: 11,
      대전광역시: 12,
      대구광역시: 13,
      '台北市(Taipei)': 14,
      '新北市(New Taipei)': 15,
      '桃園市(Taoyuan)': 16,
      '台中市(Taichung)': 17,
      '彰化縣(Changhua)': 18,
      '台南市(Tainan)': 19,
      '高雄市(Kaohsiung)': 20,
      '花蓮市(Hualien)': 21,
      Kowloon: 22,
    },
  };

  if (language in orders) {
    if (province in orders[language]) {
      return orders[language][province];
    }
  }

  return 0; // fallback.
}

export function getTwProvinceOrderNumber(province: string): number {
  const orders: {
    [keyProvince: string]: number;
  } = {
    '彰化縣(Changhua)': 1,
    '花蓮市(Hualien)': 2,
    '高雄市(Kaohsiung)': 3,
    '新北市(New Taipei)': 4,
    '台中市(Taichung)': 5,
    '台南市(Tainan)': 6,
    '台北市(Taipei)': 7,
    '桃園市(Taoyuan)': 8,
    경기도: 9,
    경상남도: 10,
    광주광역시: 11,
    대구광역시: 12,
    대전광역시: 13,
    부산광역시: 14,
    서울특별시: 15,
    인천광역시: 16,
    전라북도: 17,
    'JAPAN NAGOYA': 18,
    'JAPAN OSAKA': 19,
    Hyogo: 20,
    Singapore: 21,
    Kowloon: 22,
  };

  if (province in orders) {
    return orders[province];
  }

  return -1; // fallback.
}
