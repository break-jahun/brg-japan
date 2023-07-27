import Link from 'next/link';
import {
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  styled,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface PricingCardProps {
  title: string;
  titleKR: string;
  price: string;
  subPrice: string;
  description: string[];
  autoDescription: string;
  buttonText: string;
  disabled: boolean;
  orderType: 'EXP' | 'REG' | 'REH';
  showApplyButton?: boolean;
}

function PricingCard({
  title,
  titleKR,
  price,
  subPrice,
  description,
  autoDescription,
  buttonText,
  disabled,
  orderType,
  showApplyButton = true,
}: PricingCardProps) {
  const { t, i18n } = useTranslation();

  return (
    <Grid component="article" item xs={12} sm={4}>
      <Box padding={{ xs: '0px 48px', sm: '0px 16px' }}>
        <Card elevation={3}>
          <Box
            width={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="24px"
          >
            <Typography variant="h5" fontWeight={700}>
              {title}
            </Typography>

            {i18n.language === 'ko' && (
              <Typography variant="body1" color="gray_5">
                {titleKR}
              </Typography>
            )}
          </Box>
          <CardContent
            sx={{
              height: '140px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="baseline">
              <Typography
                align="center"
                variant={title === 'REHOLDER' ? 'h4' : 'h3'}
                fontWeight={900}
              >
                {price}
              </Typography>
              <Typography variant="caption" color="gray_5">
                {subPrice}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              align="center"
              sx={{ paddingTop: '16px' }}
            >
              {description}
            </Typography>
            <Typography variant="body1" align="center">
              {autoDescription}
            </Typography>
          </CardContent>

          {showApplyButton && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width={1}
              padding="24px"
            >
              <Link
                href={{ pathname: '/grading/submit', query: { orderType } }}
                as="/grading/submit"
                passHref
              >
                <PricingSubmitButton disabled={disabled} size="large">
                  {buttonText}
                </PricingSubmitButton>
              </Link>
            </Box>
          )}
        </Card>
      </Box>
    </Grid>
  );
}

export default PricingCard;

const PricingSubmitButton = styled(Button)({
  backgroundImage: `linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)`,
  borderRadius: '50px',
  width: '100%',
  color: 'white',
  fontWeight: 700,
  fontSize: '16px',

  '&.Mui-disabled': {
    color: 'white',
  },
});
