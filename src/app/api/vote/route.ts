import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const upvotes = (await kv.get('portfolio:upvotes')) || 0;
    const downvotes = (await kv.get('portfolio:downvotes')) || 0;
    
    return NextResponse.json({ upvotes, downvotes });
  } catch (error) {
    console.error("KV Error (GET):", error);
    return NextResponse.json({ error: 'Failed to fetch votes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, action } = body; 
    
    if (type !== 'upvote' && type !== 'downvote') {
      return NextResponse.json({ error: 'Invalid vote type' }, { status: 400 });
    }

    const key = `portfolio:${type}s`;
    
    let newValue;
    if (action === 'increment') {
      newValue = await kv.incr(key);
    } else if (action === 'decrement') {
      newValue = await kv.decr(key);
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json({ success: true, [type]: newValue });
  } catch (error) {
    console.error("KV Error (POST):", error);
    return NextResponse.json({ error: 'Failed to process vote' }, { status: 500 });
  }
}
