import FadeIn from '@/specifics/grading/components/FadeIn';
import SectionTitle from '@/specifics/grading/components/SectionTitle';
import {
  Box,
  Typography,
  Fade,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';

interface TitleDescriptionTwoColorCardProps {
  bgColor: 'black' | 'white';
  title: string;
  description: string;
  image?: string;
  alt?: string;
}

function TitleDescriptionTwoColorCard({
  bgColor,
  title,
  description,
  image,
  alt,
}: TitleDescriptionTwoColorCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const fontColor = bgColor === 'white' ? 'black' : 'white';

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={{ xs: '40px 20px', sm: '100px 20px' }}
      bgcolor={bgColor}
    >
      <SectionTitle color={fontColor}>{title}</SectionTitle>
      <Typography
        variant="body1"
        align="center"
        sx={{ wordBreak: 'keep-all' }}
        color={fontColor}
      >
        {description}
      </Typography>
      {image && (
        <Box
          paddingTop="40px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FadeIn>
            <Image alt={alt} src={image} />
          </FadeIn>
        </Box>
      )}
    </Box>
  );
}

export default TitleDescriptionTwoColorCard;

const Image = styled('img')(({ theme }) => ({
  width: '130%',

  [theme.breakpoints.up('sm')]: {
    width: '800px',
  },
}));
