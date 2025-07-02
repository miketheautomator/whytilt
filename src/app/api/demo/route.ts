import { NextRequest, NextResponse } from 'next/server';
import { sendDemoRequest } from '@/lib/smtp';

export async function POST(request: NextRequest) {
  try {
    console.log('Demo API called');
    const { name, revenue, employees, automation, theme } = await request.json();
    console.log('Form data received:', { name, revenue, employees, automation, theme });

    // Validate required fields
    if (!name || !revenue || !employees || !automation) {
      console.log('Validation failed - missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email...');
    
    // Send email
    const emailResult = await sendDemoRequest({
      name,
      revenue,
      employees,
      automation,
      theme
    });

    console.log('Email sent successfully:', emailResult.messageId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json(
      { error: 'Failed to send demo request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}