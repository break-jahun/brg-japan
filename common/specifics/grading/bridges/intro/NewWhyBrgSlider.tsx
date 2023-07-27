import { Typography, Box, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ZoomOutMapRoundedIcon from '@mui/icons-material/ZoomOutMapRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';

interface Props {}

const NewrWhyBrg = () => {
  const { t } = useTranslation();
  return (
    <Box
      width={1}
      bgcolor="gray_100"
      padding={{ xs: '80px 16px', sm: '80px 32px' }}
    >
      <Box margin="0 auto" maxWidth={{ xs: '100%', sm: '768px' }}>
        <Typography
          variant="h4"
          color="secondary_20"
          fontWeight={700}
          align="center"
        >
          {t('grading-4')}
        </Typography>
        <Wrapper>
          <ContentBox url="/images/grading/why_brg_3.png">
            <Content>
              <img
                alt="lock_icon"
                src="/icons/checklist_unclicked.png"
                width="48px"
                height="48px"
              />
              <Typography variant="h4" fontWeight={600} color="white">
                {t('grading-5')}
              </Typography>
              <Typography variant="body1" color="white" align="center">
                {t('grading-6')}
              </Typography>
            </Content>
          </ContentBox>
          <ContentBox url="/images/grading/why_brg_2.png">
            <Content>
              <LockRoundedIcon
                sx={{ color: 'white', width: '48px', height: '48px' }}
              />
              <Typography variant="h4" fontWeight={600} color="white">
                {t('grading-7')}
              </Typography>
              <Typography variant="body1" color="white" align="center">
                {t('grading-8')}
              </Typography>
            </Content>
          </ContentBox>
          <ContentBox url="/images/grading/why_brg_1.png">
            <Content>
              <ZoomOutMapRoundedIcon
                sx={{ color: 'white', width: '48px', height: '48px' }}
              />
              <Typography variant="h4" fontWeight={600} color="white">
                {t('grading-9')}
              </Typography>
              <Typography variant="body1" color="white" align="center">
                {t('grading-10')}
              </Typography>
            </Content>
          </ContentBox>
          <ContentBox url="/images/grading/why_brg_4.png">
            <Content>
              <FastForwardRoundedIcon
                sx={{ color: 'white', width: '48px', height: '48px' }}
              />
              <Typography variant="h4" fontWeight={600} color="white">
                {t('grading-11')}
              </Typography>
              <Typography variant="body1" color="white" align="center">
                {t('grading-12')}
              </Typography>
            </Content>
          </ContentBox>
        </Wrapper>
      </Box>
    </Box>
  );
};

export default NewrWhyBrg;

interface StyleProps {
  url?: string;
}

const Wrapper = styled(Box)({
  marginTop: '40px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '26px',
});

const ContentBox = styled(Box)<StyleProps>(({ theme, url }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  width: '340px',
  height: '332px',
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const Content = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  rowGap: '16px',
  maxWidth: '260px',
  height: '140px',
});
