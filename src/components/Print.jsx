import { Button } from '@mui/material'
import React from 'react'
import { FcPrint } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { selectInvoice } from '@/slices/invoicesSlice';
const Print = ({ id }) => {
    const router = useRouter();
    const dispatch = useDispatch()
    return (
        <Button onClick={() => { dispatch(selectInvoice(id)); router.push('/showInvoice') }}>
            <FcPrint />
        </Button>
    )
}

export default Print