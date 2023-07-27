import type { NextApiRequest, NextApiResponse } from 'next';

const result = {
  status: 'success',
  code: 0,
  message: 'OK',
  data: [
    {
      province: 'Hong Kong',
      country: 'HK',
    },
    {
      province: '東京都(Tokyo)',
      country: 'JP',
    },
    {
      province: '羽生市(Hanyu)',
      country: 'JP',
    },
    {
      province: '福岡市(Fukuoka)',
      country: 'JP',
    },
    {
      province: '沼津市(Numazu)',
      country: 'JP',
    },
    {
      province: '兵庫県(Hyogo)',
      country: 'JP',
    },
    {
      province: '名古屋市(Nagoya)',
      country: 'JP',
    },
    {
      province: '大阪市(Osaka)',
      country: 'JP',
    },
    {
      province: '서울특별시(Seoul)',
      country: 'KR',
    },
    {
      province: '경기도(Gyeonggi)',
      country: 'KR',
    },
    {
      province: '부산광역시(Busan)',
      country: 'KR',
    },
    {
      province: '창원시(Changwon)',
      country: 'KR',
    },
    {
      province: '대구광역시(Daegu)',
      country: 'KR',
    },
    {
      province: '대전광역시(Daejeon)',
      country: 'KR',
    },
    {
      province: '광주광역시(Gwangju)',
      country: 'KR',
    },
    {
      province: '전주시(Jeonju)',
      country: 'KR',
    },
    {
      province: '인천광역시(Incheon)',
      country: 'KR',
    },
    {
      province: 'Petaling Jaya',
      country: 'MY',
    },
    {
      province: 'Subang Jaya',
      country: 'MY',
    },
    {
      province: 'Manila',
      country: 'PH',
    },
    {
      province: 'Singapore',
      country: 'SG',
    },
    {
      province: '台北市(Taipei)',
      country: 'TW',
    },
    {
      province: '高雄市(Kaohsiung)',
      country: 'TW',
    },
    {
      province: '台中市(Taichung)',
      country: 'TW',
    },
    {
      province: '台南市(Tainan)',
      country: 'TW',
    },
    {
      province: '桃園市(Taoyuan)',
      country: 'TW',
    },
    {
      province: '新北市(New Taipei)',
      country: 'TW',
    },
    {
      province: '彰化縣(Changhua)',
      country: 'TW',
    },
    {
      province: '花蓮市(Hualien)',
      country: 'TW',
    },
    {
      province: 'Online Shop',
      country: '',
    },
  ],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(result);
}
