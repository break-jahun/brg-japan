import { Grid, SvgIconTypeMap, Typography } from '@mui/material';

interface IconTitleDescriptionCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

function IconTitleDescriptionCard({
  icon,
  title,
  description,
}: IconTitleDescriptionCardProps) {
  return (
    <Grid
      item
      xs={12}
      sm={3}
      component="article"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight={{ xs: '200px', sm: '350px' }}
      padding={{ xs: '16px', sm: '36px' }}
      border="1px solid"
      borderColor="gray_2"
    >
      {icon}
      <Typography
        component="h2"
        variant="h5"
        align="center"
        fontWeight={700}
        sx={{ padding: '16px' }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ wordBreak: 'keep-all', padding: '0 16px' }}
      >
        {description}
      </Typography>
    </Grid>
  );
}

export default IconTitleDescriptionCard;
