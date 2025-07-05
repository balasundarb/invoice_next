import { Box } from '@mui/material';

export const DataGridContainer = ({ children }) => (
  <Box sx={{ 
    width: '100%',
    height: '70vh',
    maxWidth: { lg: '80%', xl: '65%' },
    margin: 'auto',
    '& .MuiDataGrid-root': {
      border: 'none',
      borderRadius: '12px',
      padding: 2,
      boxShadow: 3
    }
  }}>
    {children}
  </Box>
);