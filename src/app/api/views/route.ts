import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return NextResponse.json({ views: 0 }); // Fallback if not configured yet
    }

    const redis = new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    });

    const views = await redis.incr('portfolio_views');
    return NextResponse.json({ views });
  } catch (error) {
    console.error('Redis Error:', error);
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}
