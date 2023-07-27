import LanguageSelect from '@/common/bridges/Footer/LanguageSelect';
import { HStack } from '@/common/components/HStack';
import { VStack } from '@/common/components/VStack';
import useCheckLoginQuery from '@/common/modules/hooks/useCheckLoginQuery';
import { Box, Divider, styled, Typography } from '@mui/material';
import Link from 'next/link';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { i18n } = useTranslation();
  const {
    linkList,
    companyName,
    ceo,
    address,
    email,
    telephoneNumber,
    businessRegistration,
    businessRegistrationNumber,
    contactKakao,
    depositAccount,
    mailSalesBusinessReport,
    personalInformationManager,
  } = useFooterParser();

  const handleClickBizInfo = (event: any) => {
    event.preventDefault();

    const popupWidth = 750;
    const popupHeight = 700;
    const popupX = window.screen.width / 2 - popupWidth / 2;
    const popupY = window.screen.height / 2 - popupHeight / 2;
    const url = 'http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2998102214';

    window.open(
      url,
      'bizCommPop',
      `width=${popupWidth}, height=${popupHeight}, left=${popupX}, top=${popupY};`
    );
  };

  return (
    <footer>
      <VStack
        color="#c0c0c0"
        alignItems="center"
        bgcolor="black"
        padding="24px"
        textAlign="center"
      >
        <HStack gap={1}>
          {linkList.map((item, index) => (
            <Fragment key={item.href}>
              <Link href={item.href} passHref>
                <Typography
                  variant={i18n.language === 'en' ? 'caption' : 'body2'}
                  fontWeight={700}
                  sx={{ wordWrap: 'break-word', whiteSpace: 'nowrap' }}
                >
                  {item.text}
                </Typography>
              </Link>
              {index !== linkList.length - 1 && (
                <StyledDivider orientation="vertical" flexItem />
              )}
            </Fragment>
          ))}
        </HStack>
        <Typography variant="caption" marginTop={2}>
          {companyName}
        </Typography>
        <Typography variant="caption">{ceo}</Typography>
        <Typography variant="caption">{address}</Typography>
        <Typography variant="caption">{email}</Typography>
        <Typography variant="caption">{telephoneNumber}</Typography>
        <Typography variant="caption">{personalInformationManager}</Typography>
        <Typography variant="caption">{businessRegistrationNumber}</Typography>
        <Typography variant="caption">{mailSalesBusinessReport}</Typography>
        <Typography variant="caption">{depositAccount}</Typography>
        <a href="#" onClick={handleClickBizInfo} target="_blank">
          <Typography variant="caption" fontWeight={700}>
            {businessRegistration}
          </Typography>
        </a>
        <a href="http://pf.kakao.com/_BpWrs" target="_blank" rel="noreferrer">
          <Typography variant="caption" fontWeight={700}>
            {contactKakao}
          </Typography>
        </a>
        <Typography variant="caption" marginTop={2}>
          © BREAK & COMPANY 2022.
        </Typography>
        <LanguageSelect />
      </VStack>
    </footer>
  );
}

const StyledDivider = styled(Divider)({
  borderColor: '#c0c0c0',
  margin: 'auto',
  height: '13px',
});

function useFooterParser() {
  const { data: isLogin } = useCheckLoginQuery();
  const { t } = useTranslation();

  let linkList = [
    {
      href: '/agreement',
      text: t('footer/terms-of-service'),
    },
    {
      href: '/privacy',
      text: t('footer/privacy-policy'),
    },
  ];
  if (isLogin) {
    linkList = linkList.concat([
      {
        href: '/logout',
        text: t('general/logout'),
      },
    ]);
  } else {
    linkList = linkList.concat([
      {
        href: '/signup',
        text: t('signup/title'),
      },
      {
        href: '/login',
        text: t('login/title'),
      },
    ]);
  }

  const companyName = `${t('footer/label/company-name')} : ${t(
    'footer/company-name'
  )}`;

  const ceo = `${t('footer/label/ceo')} : ${t('footer/ceo')}`;

  const address = `${t('footer/label/adress')} : ${t('footer/adress')}`;

  const email = `${t('footer/label/email')} : ${t('footer/email')}`;

  const telephoneNumber = `${t('footer/label/tel')} : ${t('footer/tel')}`;

  const personalInformationManager = `${t(
    'footer/label/personal-information-manager'
  )} : ${t('footer/personal-information-manager')}`;

  const businessRegistrationNumber = `${t(
    'footer/label/business-registration-number'
  )} : ${t('footer/business-registration-number')}`;

  const mailSalesBusinessReport = `${t(
    'footer/label/mail-sales-business-report'
  )} : ${t('footer/mail-sales-business-report')}`;

  const depositAccount = `${t('footer/label/deposit-account')} : ${t(
    'footer/deposit-account'
  )}`;

  const businessRegistration = t('footer/Business registration');

  const contactKakao = t('footer/contact-kakao');

  return {
    linkList,
    companyName,
    ceo,
    address,
    email,
    telephoneNumber,
    personalInformationManager,
    businessRegistrationNumber,
    mailSalesBusinessReport,
    depositAccount,
    businessRegistration,
    contactKakao,
  };
}

export default Footer;
