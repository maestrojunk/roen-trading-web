import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { submitInquiry } from '@/lib/supabase';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { category, email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: 'Email and message are required.' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase inquiries database
    try {
      await submitInquiry({
        category: category || 'GENERAL_INQUIRY',
        email,
        message,
      });
    } catch (dbErr) {
      console.error('Supabase save error (non-fatal):', dbErr);
    }

    // 2. Server-side Email Dispatch via Resend
    let emailSent = false;
    let emailError = null;

    if (resend) {
      try {
        const emailResponse = await resend.emails.send({
          from: 'ROEN TRADING <onboarding@resend.dev>',
          to: ['maestro.990625@gmail.com'], // Verified account email for instant delivery
          replyTo: email,
          subject: `[ROEN TRADING B2B 문의] ${category || '공식 문의 접수'}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #e4e4e7; border-radius: 8px; background: #ffffff; color: #18181b;">
              <div style="border-bottom: 2px solid #18181b; padding-bottom: 16px; margin-bottom: 24px;">
                <h1 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.15em; color: #09090b;">ROEN TRADING</h1>
                <p style="margin: 6px 0 0; font-size: 13px; color: #71717a;">공식 기업 홈페이지 실시간 B2B 문의 알림</p>
              </div>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 10px 0; color: #71717a; width: 130px; font-weight: 500;">문의 유형</td>
                  <td style="padding: 10px 0; color: #09090b; font-weight: 600;">${category}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 10px 0; color: #71717a; font-weight: 500;">보낸 사람 (회신)</td>
                  <td style="padding: 10px 0; color: #09090b; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #71717a; font-weight: 500;">접수 일시</td>
                  <td style="padding: 10px 0; color: #09090b;">${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</td>
                </tr>
              </table>

              <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 6px; margin-bottom: 24px;">
                <p style="margin: 0 0 10px; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em;">상세 문의 내용</p>
                <div style="font-size: 14px; line-height: 1.7; color: #0f172a; white-space: pre-wrap;">${message}</div>
              </div>

              <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 16px; text-align: center;">
                본 메일은 ROEN TRADING 공식 기업 홈페이지(roen-trading-web.vercel.app) Contact 폼에서 실시간 발송되었습니다.<br>
                '답장(Reply)'을 누르시면 문의자의 이메일(${email})로 바로 회신하실 수 있습니다.
              </div>
            </div>
          `,
        });

        if (emailResponse.error) {
          console.error('Resend delivery error:', emailResponse.error);
          emailError = emailResponse.error.message;
        } else {
          emailSent = true;
        }
      } catch (err: any) {
        console.error('Resend execution error:', err);
        emailError = err?.message;
      }
    }

    return NextResponse.json({
      success: true,
      emailSent,
      emailError,
      message: 'Inquiry processed successfully.',
    });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Server error' },
      { status: 500 }
    );
  }
}
