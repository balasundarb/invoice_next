'use client'

import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Paper } from '@mui/material'
import axios from 'axios'
import { MdArrowBack } from "react-icons/md";
import { useRouter } from 'next/navigation';

import NavBar from '@/components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../../theme';
import { CssBaseline } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const CreateNewPayee = () => {
  const router = useRouter();
  const Mode = useSelector((state) => state.theme.Darkmode)
  const [payeeName, setPayeeName] = useState('');
  const [payeeContact, setPayeeContact] = useState('');
  const [payeeAddress, setPayeeAddress] = useState('');

  const notifySuccess = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const notifyError = (message) => toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const createNewPayeeData = async () => {

    if (payeeName === "") {
      notifyError("Enter Payee Name")
      document.getElementById('payee-name').focus();
      return
    }

    if (payeeContact === "") {
      notifyError("Enter Payee Phone Number")
      document.getElementById('payee-contact').focus();
      return
    }

    if (payeeContact.length != 10) {
      notifyError("Enter Correct Phone Number")
      document.getElementById('payee-contact').focus();
      return
    }

    if (payeeContact <= 0) {
      notifyError("Enter Correct Phone Number without +91 / +0")
      document.getElementById('payee-contact').focus();
      return
    }

    const payeeData = JSON.stringify({ "payeeName": payeeName, "payeeContact": payeeContact, "payeeAddress": payeeAddress })
    try {

      const response = await axios.post('/api/create/newPayee', payeeData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 200) {
        notifySuccess('Payee Data saved successfully');
        setPayeeName("");
        setPayeeContact("");
        setPayeeAddress("");
        document.getElementById('payee-name').focus();
        console.log('Payee Data saved successfully');
      } else {
        notifyError('Error on saving payee Data to file');
        console.error('Error on saving payee Data to file');
      }

    } catch (error) {
      console.error(error);
      notifyError(error.message)
    }

  };

  return (<ThemeProvider theme={Mode ? darkTheme : lightTheme}>
    <CssBaseline />

     <NavBar />
    <Container sx={{ width: '100vw', height: '100vh', textAlign: 'center', padding: 0, paddingTop: '50px', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h1" sx={{ fontSize: '3rem' }}> Create New Payee </Typography>
      <Paper elevation={8} sx={{ width: '50%', height: '75%', margin: "20px auto", borderRadius: '50px', padding: '10px', display: 'flex', flexFlow: 'column', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>


        <Typography variant="h6" gutterBottom sx={{ fontSize: '1.5rem', margin: '20px' }}>
          Payee Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <TextField
              id="payee-name"
              label="Payee Name"
              variant="outlined"
              fullWidth
              value={payeeName}
              onChange={(e) => setPayeeName(e.target.value)}
              helperText={payeeName === "" && "Enter Payee Name"}
            />

          </Grid>
          <Grid item xs={12}>
            <TextField
              id='payee-contact'
              label="Payee Contact"
              variant="outlined"
              fullWidth
              type={"number"}
              inputProps={{ min: 0 }}
              value={payeeContact}
              onChange={(e) => setPayeeContact(e.target.value)}
              helperText={payeeContact === "" && "Enter Phone Number" || payeeContact.length != 10 && "Enter Correct Phone Number"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Payee Address*"
              variant="outlined"
              fullWidth
              value={payeeAddress}
              onChange={(e) => setPayeeAddress(e.target.value)}
              multiline
              rows={4}
              helperText={payeeAddress === "" && "Payee Address is Optional"}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => { createNewPayeeData() }}  >
              Add Payee
            </Button>
          </Grid>
        </Grid>
        {/* <Typography variant="caption" sx={{ textAlign: 'Right', width: '80%' }}>Note: * is Optional</Typography> */}
      </Paper>
      <Button variant="text" startIcon={<MdArrowBack />} sx={{ position: 'absolute', top: 3, left: 3, "&:hover": { backgroundColor: 'transparent' }, }} onClick={() => { router.back() }}>
        Go Back
      </Button>
      <ToastContainer />
    </Container>
  </ThemeProvider>
  )
}

export default CreateNewPayee