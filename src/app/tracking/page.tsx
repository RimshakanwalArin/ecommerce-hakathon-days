// app/page.tsx
'use client'; // Client-side component ke liye

import { useState } from 'react';
import { TrackingResponse } from '../types/shippo'; 

export default function Home() {
    const [carrier, setCarrier] = useState('');
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingData, setTrackingData] = useState<TrackingResponse | null>(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/tracking?carrier=${carrier}&trackingNumber=${trackingNumber}`);
            if (!response.ok) {
                throw new Error('Failed to fetch tracking data');
            }

            const data = await response.json();
            setTrackingData(data);
            setError('');
        } catch (err) {
            setError('Something went wrong. Please try again.');
            setTrackingData(null);
        }
    };

    return (
        <div className='mt-32'>
            <h1>Shippo Tracking</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Carrier:</label>
                    <input
                        type="text"
                        value={carrier}
                        onChange={(e) => setCarrier(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tracking Number:</label>
                    <input
                        type="text"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Track</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {trackingData && (
                <div>
                    <h2>Tracking Information</h2>
                    <pre>{JSON.stringify(trackingData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}