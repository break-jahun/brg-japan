import LanguageSelect from '@/common/bridges/Header/PCMenu/LanguageSelect';
import Profile from '@/common/bridges/Header/PCMenu/Profile';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ViewListIcon from '@mui/icons-material/ViewList';
import CollectionsIcon from '@mui/icons-material/Collections';

const MenuName = [
  'HOME',
  'GRADING',
  'CERTIFICATION',
  'PARTNERS',
  'COMMUNITY',
  'FAQ',
  'SIGN UP',
  'LOG IN',
  'MY PAGE',
  'LANGUAGE',
] as const;

export const SubmenuName = [
  'Holder & Label',
  'Grading Process',
  'Grading Scale',
  'Pricing',
  '대시보드',
  '프로필',
  '주문목록',
  '컬렉션',
  '포트폴리오',
] as const;

export const Hrefs = [
  '/',
  '/grading/holderandlabel',
  '/grading/process',
  '/grading/scale',
  '/grading/pricing',
  '/certification',
  '/partners',
  '/community',
  '/faq',
  '/signup',
  '/login',
  '/account/dashboard',
  '/account/profile',
  '/account/orderList',
  '/account/collection/grading',
  '/language',
] as const;

type Submenu = {
  icon?: React.ReactNode | string;
  name: typeof SubmenuName[number];
  href: typeof Hrefs[number];
  submenu?: Submenu[];
};

export type MenuListType = {
  name: typeof MenuName[number];
  href?: typeof Hrefs[number];
  submenu?: Submenu[];
  render?: React.ReactNode;
}[];

const MenuList: MenuListType = [
  {
    name: 'HOME',
    href: '/',
  },
  {
    name: 'GRADING',
    href: '/grading/holderandlabel',
    submenu: [
      {
        name: 'Holder & Label',
        href: '/grading/holderandlabel',
      },
      {
        name: 'Grading Process',
        href: '/grading/process',
      },
      {
        name: 'Grading Scale',
        href: '/grading/scale',
      },
      {
        name: 'Pricing',
        href: '/grading/pricing',
      },
    ],
  },
  {
    name: 'CERTIFICATION',
    href: '/certification',
  },
  {
    name: 'PARTNERS',
    href: '/partners',
  },
  {
    name: 'COMMUNITY',
    href: '/community',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: 'LANGUAGE',
    href: '/language',
    render: <LanguageSelect />,
  },
  {
    name: 'SIGN UP',
    href: '/signup',
  },
  {
    name: 'LOG IN',
    href: '/login',
  },
  {
    name: 'MY PAGE',
    href: '/account/dashboard',
    submenu: [
      {
        name: '대시보드',
        href: '/account/dashboard',
        icon: <DashboardIcon fontSize="small" />,
      },
      {
        name: '프로필',
        href: '/account/profile',
        icon: <PersonIcon fontSize="small" />,
      },
      {
        name: '주문목록',
        href: '/account/orderList',
        icon: <ViewListIcon fontSize="small" />,
      },
      {
        name: '컬렉션',
        href: '/account/collection/grading',
        icon: <CollectionsIcon fontSize="small" />,
        submenu: [
          {
            name: '포트폴리오',
            href: '/account/collection/grading',
            icon: '-',
          },
        ],
      },
    ],
    render: <Profile />,
  },
];

export default MenuList;
