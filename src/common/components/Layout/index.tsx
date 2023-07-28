import { Box } from '@mui/material';
import { ReactChild } from 'react';
import NavigationBar from 'brg-japan/components/Layout/NavigationBar';
import NavigationHeader from './NavigationHeader';
import Footer from './Footer';

interface Props {
  children: ReactChild;
}

const Layout = ({ children }: Props) => {
  return (
    <Box position="relative">
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
