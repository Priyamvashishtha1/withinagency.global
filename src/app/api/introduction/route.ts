import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
  const country = typeof data.country === 'string' ? data.country.trim() : '';
  const interests = Array.isArray(data.interests)
    ? data.interests.filter((value): value is string =>
        typeof value === 'string' && ['Funds', 'Private companies', 'Real estate'].includes(value)
      ).slice(0, 10)
    : [];
  const message = typeof data.message === 'string' ? data.message.trim() : '';
  const consent = data.consent === true;

  if (!name || name.length > 200 || !emailPattern.test(email) || email.length > 254 ||
      phone.length > 40 || !country || country.length > 100 || interests.length === 0 ||
      message.length > 5000) {
    return NextResponse.json({ error: 'Please check the required form details and try again.' }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
  if (!scriptUrl || !secret) {
    console.error('Introduction form is not configured: GOOGLE_SHEETS_WEBHOOK_URL and/or GOOGLE_SHEETS_WEBHOOK_SECRET is missing.');
    return NextResponse.json({ error: 'This form is temporarily unavailable. Please try again later.' }, { status: 503 });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, country, interests, message, consent, secret }),
      cache: 'no-store',
      redirect: 'follow',
    });
    const result = await response.json().catch(() => null) as { ok?: boolean; serialNo?: number } | null;
    if (!response.ok || !result?.ok) {
      return NextResponse.json({ error: 'We could not save your enquiry. Please try again or contact us directly.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, serialNo: result.serialNo }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'We could not save your enquiry. Please try again or contact us directly.' }, { status: 502 });
  }
}
