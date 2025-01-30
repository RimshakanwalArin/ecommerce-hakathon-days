// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: "2023-10-16",
// });

// export async function POST(req: NextRequest) {
//   try {
//     const { amount } = await req.json();

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount, // Amount in cents (e.g., $10 = 1000 cents)
//       currency: "usd",
//       payment_method_types: ["card"],
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     return NextResponse.json({ error: (error as Error).message }, { status: 500 });
//   }
// }
