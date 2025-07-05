import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { invoicesData } from '@/slices/invoicesSlice';

export const useInvoiceData = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoiceData.invoices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('/api/create/newInvoice');
        dispatch(invoicesData(response.data));
      } catch (error) {
        console.error('Error fetching invoices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, [dispatch]);

  const rows = invoices.map(invoice => ({
    _id: invoice._id,
    billNo: invoice.billNo,
    createdAt: invoice.createdAt,
    payMethod: invoice.payMethod,
    paymentTo: invoice.paymentTo,
    items: invoice.itemList.map(item => item.itemName),
    totalAmount: `₹${invoice.totalAmount.toLocaleString('en-IN')}`
  }));

  return { rows, loading };
};