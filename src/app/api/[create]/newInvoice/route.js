
import fs from 'fs'
import { NextResponse } from 'next/server';

const invoicesFilePath = './src/app/db/invoices.json';

export async function GET() {
    try {
        const invoices = require('../../../db/invoices.json');
        const invoicesData = JSON.stringify(invoices);

        return new NextResponse(invoicesData);
        // return new NextResponse("Welcome - This is a Create Invoice API. Create POST Method with Include JSON File Data.")
    } catch (err) {
        console.error(err);
        return new NextResponse('Error occurred Fetching Invoices', { status: 500 });
    }
    
}


export async function POST(req, res) {

    try {
        const invoices = require("../../../db/invoices");
        const newInvoice = await req.json();
        invoices.push(newInvoice);

        fs.writeFileSync(invoicesFilePath, JSON.stringify(invoices));
        
        return new NextResponse('OK');
    } catch (err) {
        console.error(err);
        return new NextResponse('Error occurred', { status: 500 });
    }

}
