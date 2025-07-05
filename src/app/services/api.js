import axios from 'axios';

const API_BASE_URL = '/api';

// Create a reusable axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetches all payees from the API
 * @returns {Promise} Axios response
 */
export const fetchPayees = async () => {
  try {
    const response = await api.get('/create/newPayee');
    return response;
  } catch (error) {
    console.error('Error fetching payees:', error);
    throw error;
  }
};

/**
 * Fetches all invoices from the API
 * @returns {Promise} Axios response
 */
export const fetchInvoices = async () => {
  try {
    const response = await api.get('/create/newInvoice');
    return response;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    throw error;
  }
};

/**
 * Creates a new invoice
 * @param {Object} invoiceData - The invoice data to create
 * @returns {Promise} Axios response
 */
export const createInvoice = async (invoiceData) => {
  try {
    const response = await api.post('/create/newInvoice', invoiceData);
    return response;
  } catch (error) {
    console.error('Error creating invoice:', error);
    throw error;
  }
};

/**
 * Creates a new payee
 * @param {Object} payeeData - The payee data to create
 * @returns {Promise} Axios response
 */
export const createPayee = async (payeeData) => {
  try {
    const response = await api.post('/create/newPayee', payeeData);
    return response;
  } catch (error) {
    console.error('Error creating payee:', error);
    throw error;
  }
};

// Assign the API methods to a variable before exporting
const apiService = {
  fetchPayees,
  fetchInvoices,
  createInvoice,
  createPayee,
};

export default apiService;