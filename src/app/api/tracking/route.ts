// app/api/tracking/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const carrier = searchParams.get('carrier');
    const trackingNumber = searchParams.get('trackingNumber');

    if (!carrier || !trackingNumber) {
        return NextResponse.json({ error: 'Carrier and tracking number are required' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://api.goshippo.com/tracks/${carrier}/${trackingNumber}/`, {
            headers: {
                'Authorization': `ShippoToken ${process.env.NEXT_PUBLIC_SHIPPO_API_KEY}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch tracking data');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}