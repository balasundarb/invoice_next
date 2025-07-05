"use client";
import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Typography,
  Button,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, Grid } from "@mui/material";

import NavBar from "@/components/NavBar";
import ShowAllInvoices from "./showAllInvoices/page";

import { darkTheme, lightTheme } from "./theme";

import { payeeData } from "../slices/payeeSlice";
import { invoicesData } from "../slices/invoicesSlice";

import { fetchInvoices, fetchPayees } from "./services/api";

const HomePage = () => {
  const Mode = useSelector((state) => state.theme.Darkmode);
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [payeesResponse, invoicesResponse] = await Promise.all([
          fetchPayees(),
          fetchInvoices(),
        ]);

        dispatch(payeeData(payeesResponse.data));
        dispatch(invoicesData(invoicesResponse.data));
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to load application data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup if needed
    };
  }, [dispatch]);

  if (loading) {
    return (
      <ThemeProvider theme={Mode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={60} />
        </Box>
      </ThemeProvider>
    );
  }

  if (error) {
    return (
      <ThemeProvider theme={Mode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Alert severity="error" sx={{ width: "50%" }}>
            {error}
          </Alert>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={Mode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ width: "100%", minHeight: "100vh", p: 0, m: 0 }}>
        <NavBar />

        <Box sx={{ width: "100%", px: { xs: 2, md: 4 }, py: 4 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "4rem" },
              py: 4,
              color: "primary.main",
              fontWeight: 700,
            }}
          >
            Invoice Management System
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              maxWidth: 1600,
              mx: "auto",
            }}
          >
            {/* Action Buttons Column - Fixed Width */}
            <Box
              sx={{
                width: { xs: "100%", md: 300 },
                flexShrink: 0,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    height: 100,
                    width: "100%",
                    fontSize: "1.1rem",
                    boxShadow: 2,
                    "&:hover": { boxShadow: 4 },
                  }}
                  onClick={() => router.push("/create/newInvoice")}
                >
                  Create New Invoice
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    height: 100,
                    width: "100%",
                    fontSize: "1.1rem",
                    boxShadow: 2,
                    "&:hover": { boxShadow: 4 },
                  }}
                  onClick={() => router.push("/create/newPayee")}
                >
                  Add New Payee
                </Button>
              </Box>
            </Box>

            {/* Invoice List - Takes remaining space */}
            <Box
              sx={{
                flexGrow: 1,
                width: "100%",
                minWidth: 0, // Prevents overflow
              }}
            >
              <Suspense
                fallback={
                  <Box
                    sx={{ display: "flex", justifyContent: "center", py: 4 }}
                  >
                    <CircularProgress />
                  </Box>
                }
              >
                <ShowAllInvoices />
              </Suspense>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
