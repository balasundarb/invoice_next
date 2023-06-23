'use client'

import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
// import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { ToWords } from 'to-words';

const ShowInvoice = () => {
  // const router = useRouter()
  const toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: { // can be used to override defaults for the selected locale
        name: 'Rupee',
        plural: 'Rupees',
        symbol: '₹',
        fractionalUnit: {
          name: 'Paisa',
          plural: 'Paise',
          symbol: '',
        },
      }
    }
  });
  const invoices = useSelector((state) => state.invoiceData.invoices)
  const selectedInvoice = useSelector((state) => state.invoiceData.selectedInvoice)

  const invoiceData = Object.values(invoices).filter(item => item._id === selectedInvoice)

  const printData = invoiceData.map((row) => {
    return {
      _id: row._id,
      payMethod: row.payMethod,
      paymentTo: row.paymentTo,
      itemList: row.itemList.map((row) => { return { itemName: row.itemName, itemQty: row.itemQty, itemRate: row.itemRate, amount: row.amount } }),
      totalAmount: "₹ " + row.totalAmount,
      billDate: row.createdAt,
      billNo: row.billNo,
    }
  })
  return (<>{
    printData[0] ?
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ margin: '20px', marginTop: '30px' }}>
          < Typography variant="h5" > Name of the Organization</Typography >
          <Typography variant="caption"> Address of the Organization</Typography>
        </Box>
        <Typography variant='body1'>{printData[0].payMethod} payment Voucher</Typography>
        <Grid container spacing={0} sx={{ width: '60%', margin: '15px auto' }}>
          <Grid item xs={6} sx={{ textAlign: 'left' }}>
            <Typography variant='body1' > Bill No : {printData[0].billNo}</Typography>
            <Typography variant='body1'> Bill Date : {printData[0].billDate}</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography variant='body1'> Payment To : {printData[0].paymentTo}</Typography>
            <Typography variant='body1'> Payment Type : {printData[0].payMethod}</Typography>

          </Grid>
        </Grid>
        <TableContainer component={Paper} sx={{ width: '60%', margin: 'auto' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Particulars</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price (₹)</TableCell>
                <TableCell align="right">Amount (₹)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {printData[0].itemList.map((row) => (
                <TableRow
                  key={row.itemName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.itemName}
                  </TableCell>
                  <TableCell align="right">{row.itemQty}</TableCell>
                  <TableCell align="right">{row.itemRate}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ width: '100%' }}>
                <TableCell></TableCell>
                <TableCell align="right">Total Bill Amount</TableCell>
                <TableCell></TableCell>
                <TableCell align="right">{printData[0].totalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: '60%', margin: '20px auto', textAlign: 'left' }}>

          <Typography variant='body1'>Amount (in words): <b> {toWords.convert(parseInt(invoiceData[0].totalAmount))}</b></Typography>

        </Box>
        <Button onClick={() => { window.print() }}>
          Print
        </Button>

        <Grid container spacing={2} sx={{ marginTop: '100px' }}>
          <Grid item xs={6}> <Typography variant='body2'>Receiver Signature</Typography></Grid>
          <Grid item xs={6}>  <Typography variant='body2'>Authorised Signature</Typography></Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: '100px' }}>
          <Grid item xs={4}> <Typography variant='body2'>Receiver Signature</Typography></Grid>
          <Grid item xs={4}> <Typography variant='body2'>Receiver Signature</Typography></Grid>
          <Grid item xs={4}>  <Typography variant='body2'>Authorised Signature</Typography></Grid>
        </Grid>

      </Box > : <Box sx={{ display: 'flex', margin: '10%' }}><h1>Invoice not Selected </h1><Link href='/'><h1>Go Back</h1></Link> </Box>}
  </>)
}

export default ShowInvoice