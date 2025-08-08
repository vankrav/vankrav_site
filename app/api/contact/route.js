export async function POST(request) {
  const formData = await request.formData();
  const payload = {
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    message: String(formData.get('message') || ''),
  };

  // Здесь можно интегрировать Email API (Resend/Sendgrid) или Telegram Bot API
  if (!payload.name || !payload.email || !payload.message) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid form' }), { status: 400 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

