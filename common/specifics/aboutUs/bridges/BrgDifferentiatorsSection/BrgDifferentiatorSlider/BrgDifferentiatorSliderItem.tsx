import {
  Box,
  SvgIconTypeMap,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import { useTranslation } from 'react-i18next';

interface Props {
  icon: OverridableComponent<SvgIconTypeMap>;
  title: string;
  description: string;
}

const BrgDifferentiatorSliderItem = ({
  title,
  description,
  icon: Icon,
}: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <MaxWidthLayoutBox>
        <Icon
          sx={{
            color: 'white',
            width: { xs: '48px', sm: '96px' },
            height: { xs: '48px', sm: '96px' },
          }}
        />
        <Box
          sx={{
            marginY: { xs: '20px', sm: '24px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            fontWeight={600}
            variant={isMobile ? 'h5' : 'h3'}
            color="white"
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: '216px', sm: '96px' },
          }}
        >
          <Typography variant="body1" color="gray_200">
            {description}
          </Typography>
        </Box>
      </MaxWidthLayoutBox>
    </Box>
  );
};

export default BrgDifferentiatorSliderItem;
