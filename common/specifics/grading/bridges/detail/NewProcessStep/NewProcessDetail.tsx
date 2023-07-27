/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import SectionLayout from '@/common/components/Layout/SectionLayout';
import TheMapping from '@/specifics/grading/bridges/detail/ProcessDetail/TheMapping';
import VisualSpectralComparator from '@/specifics/grading/bridges/detail/ProcessDetail/VisualSpectralComparator';

function NewProcessDetail() {
  return (
    <SectionLayout
      sx={{ paddingTop: 0, padding: { xs: '40px 16px', sm: '64px 32px' } }}
    >
      <Box
        width={{ xs: '100%', sm: '704px' }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={{ xs: '40px', sm: '64px' }}
        margin="0 auto"
      >
        <TheMapping />
        <VisualSpectralComparator />
      </Box>
    </SectionLayout>
  );
}

export default NewProcessDetail;
