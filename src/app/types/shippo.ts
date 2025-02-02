// types/shippo.ts
export interface TrackingHistory {
    date: string;
    status: string;
    location: string;
}

export interface TrackingResponse {
    tracking_number: string;
    carrier: string;
    status: string;
    tracking_history: TrackingHistory[];
}