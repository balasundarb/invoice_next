'use client'
import React, { useEffect } from 'react'
import { Box } from '@mui/material'
// import NavBar from '@/components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../theme';
import { CssBaseline } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { invoicesData } from '@/slices/invoicesSlice';

import { DataGrid } from '@mui/x-data-grid';
import Print from '@/components/Print';


const columns = [
  { field: 'billNo', headerName: 'Bill No', width: 70, hideable: false },
  { field: 'payMethod', headerName: 'Payment Type', width: 130 },
  { field: 'paymentTo', headerName: 'Payment To', width: 130 },
  { field: 'itemList', headerName: 'Items', width: 130 },
  { field: 'totalAmount', headerName: 'Total Amount', width: 130, align: 'right' },
  { field: 'createdAt', headerName: 'Bill Date', width: 130, align: 'center' },
  {
    field: '_id',
    headerName: 'Action',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

      };

      return <Print key={params.id} id={params.id} />;
    },
  },
];

const ShowAllInvoices = () => {

  const Mode = useSelector((state) => state.theme.Darkmode)
  const invoices = useSelector((state) => state.invoiceData.invoices)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchInvoices() {

      const response = await axios.get('/api/create/newInvoice')
      dispatch(invoicesData(response.data))
    }
    fetchInvoices();
    return () => {
      fetchInvoices()
    }
  }, [])

  const row = invoices.map((row) => {
    return {
      _id: row._id,
      billNo: row.billNo,
      createdAt: row.createdAt,
      payMethod: row.payMethod,
      paymentTo: row.paymentTo,
      itemList: row.itemList.map((row) => { return row.itemName }),
      totalAmount: "₹ " + row.totalAmount,
    }
  })


  return (<ThemeProvider theme={Mode ? darkTheme : lightTheme}>
    <CssBaseline />
    <Box sx={{ width: 'auto', height: 'auto' }}>
      {/* <NavBar /> */}
      <Box sx={{ width: { xs: '100%', md: '100%', lg: '80%', xl: '65%' }, margin: 'auto' }}>

        <DataGrid
          rows={row}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  </ThemeProvider>
  )
}

export default ShowAllInvoices
