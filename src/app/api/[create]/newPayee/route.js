import fs from 'fs';
import { NextResponse } from 'next/server';

const payeeFilePath = './src/app/db/payee.json';

export async function GET() {
    try {
        const payee = require('../../../db/payee.json');
        const payeeData = JSON.stringify(payee);

        console.log(payeeData);
        return new NextResponse(payeeData);
    } catch (err) {
        console.error(err);
        return new NextResponse('Error occurred', { status: 500 });
    }
}

export async function POST(req, res) {
    try {
        const payee = require('../../../db/payee.json');
        const newPayee = await req.json();
        // Process the new payee data
        payee.push(newPayee);

        fs.writeFileSync(payeeFilePath, JSON.stringify(payee));

        return new NextResponse('Payee created', { status: 200 });
    } catch (err) {
        console.error(err);
        return new NextResponse('Error occurred', { status: 500 });
    }
}
