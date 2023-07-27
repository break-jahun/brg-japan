import NewsSection from '@/specifics/home/bridges/NewsSection';

const NEWS_LIST = [
  {
    src: '/images/home/news_1.png',
    title:
      'Break & Companyはオフラインポップアップストアの\n主催に成功しました。',
    content:
      'Break & Companyは2022年6月の1週間、The Hyundai Pangyoでトレーディングカード\nポップアップストアの開催に成功し、訪問者の支持を集めました。\nBreak & Companyは、トレーディングカードコレクターのためのサービスとコンテンツを開発および提供し、コレクト市場の拡大に貢献したいと考えています。',
    publishedAt: '22. 07. 12',
    link: 'https://www.newswire.co.kr/newsRead.php?no=947682',
  },
  {
    src: '/images/home/news_2.png',
    title: 'アジアグレーディングの中心brg (Break Grading)!',
    content:
      'ヨーロッパやアメリカの多くのグレーディング会社とともに、\n新しいアジアのグレーディング会社が誕生しました。\nbrg は、PSA や BGS と同様の封印方法、高度な改ざん防止技術、および超音波封印を\n使用してカードの安全性と完全性を維持することにより、価値を維持します。\nbrg は、CPBLと中国のラベルに対応することで、台湾のカード愛好家にも価値を提供しています。\n間違いなく、brg はアジアのカード市場に新たな息吹を吹き込んでいます。',
    publishedAt: '22. 07. 20',
    link: 'https://www.sportsv.net/articles/89984',
  },
  {
    src: '/images/home/news_3.png',
    title:
      'トレーディングカードサービスプラットフォーム「brg」は、\nシードラウンドの資金調達で 370 万ドルを調達。',
    content:
      'トレーディングカードサービスプラットフォーム「brg」の運営会社である\nBreak & Company は、シードラウンドの資金調達で 370 万ドルの資金調達に成功しました。\nこれまでのところ、Break & Company はこの投資ラウンドを通じて累積で 520 万ドルを調達しています。Break & Company は、サービスの加速、人材の採用、市場の拡大、および新しいサービスの開発などの分野に新しい資金を適用する予定です。\nまた、Break & Companyは取引プラットフォーム「Break」の立ち上げスケジュールを早めることにも注力し、\n取引やトレーディングカードに関する情報検索/交換が容易にできるマーケットをユーザーに提供する予定です。',
    publishedAt: '22. 08. 19',
    link: 'https://news.mt.co.kr/mtview.php?no=2022081911295174215',
  },
];

function JapanNewsSection() {
  return <NewsSection newsList={NEWS_LIST} />;
}

export default JapanNewsSection;
