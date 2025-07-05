'use client'
import React from 'react'; 
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// Theme 
import { DataGridContainer } from '@/components/DataGridContainer';
import { PrintAction } from '@/components/PrintAction';
import { useInvoiceData } from '@/lib/useInvoiceData';
import { darkTheme, lightTheme } from '../theme';
import { useSelector } from 'react-redux';

const ShowAllInvoices = () => {
  const darkMode = useSelector((state) => state.theme.Darkmode);
  const { rows, loading } = useInvoiceData();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <InvoiceDataGrid rows={rows} loading={loading} />
    </ThemeProvider>
  );
};

export default ShowAllInvoices;

// Sub-components (could be moved to separate files)
const InvoiceDataGrid = ({ rows, loading }) => (
  <DataGridContainer>
    <DataGrid
      rows={rows}
      columns={invoiceColumns}
      loading={loading}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      getRowId={(row) => row._id}
      sx={{
        '& .MuiDataGrid-cell': {
          borderBottom: 'none',
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: 'background.paper',
          borderBottom: 'none',
        },
      }}
    />
  </DataGridContainer>
);

// Column configuration
const invoiceColumns = [
  { 
    field: 'billNo', 
    headerName: 'Bill No', 
    width: 90,
    headerAlign: 'center',
    align: 'center'
  },
  { 
    field: 'payMethod', 
    headerName: 'Payment Type', 
    width: 130,
    valueFormatter: (params) => formatPaymentMethod(params.value)
  },
  { 
    field: 'paymentTo', 
    headerName: 'Payee', 
    width: 150 
  },
  { 
    field: 'items', 
    headerName: 'Items', 
    width: 180,
    valueFormatter: (params) => params.value.join(', ')
  },
  { 
    field: 'totalAmount', 
    headerName: 'Amount', 
    width: 130, 
    align: 'right',
    headerAlign: 'right'
  },
  { 
    field: 'createdAt', 
    headerName: 'Date', 
    width: 120,
    valueFormatter: (params) => formatDate(params.value),
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'actions',
    headerName: ' ',
    width: 100,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => <PrintAction id={params.row._id} />,
    align: 'center'
  }
];

// Utility functions (could be moved to utils/)
const formatPaymentMethod = (method) => {
  const methods = {
    cash: 'Cash',
    card: 'Card',
    upi: 'UPI',
    netbanking: 'Net Banking'
  };
  return methods[method.toLowerCase()] || method;
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-IN');
};