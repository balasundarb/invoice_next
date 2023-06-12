'use client'

import { useRouter } from 'next/navigation';
import { Typography, Button, Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

const HomePage = () => {
  const router = useRouter();
  // const theme = useTheme();
  return (
    <Box sx={{  width: '100%', height: '100vh', p: 0, m: 0 }}>
      <Typography variant="h1" component='h1' sx={{ textAlign: 'center', fontSize: '4rem', paddingTop: '10%', color:'#5d4d66' }}>Welcome to Invoice</Typography>
      <Button variant="contained" color="primary" sx={{ height: '100px', width: '250px', display: 'block', margin: "10px auto" }} onClick={() => router.push('/create/newInvoice')}>
        Create New Invoice
      </Button>
      <Button variant="contained" color="primary" sx={{ height: '100px', width: '250px', display: 'block', margin: "10px auto" }} onClick={() => router.push('/create/newPayee')}>
        Create New Payee
      </Button>
    </Box>)
}

export default HomePage;
