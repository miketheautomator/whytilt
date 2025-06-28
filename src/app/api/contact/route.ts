import { NextResponse } from 'next/server';
import * as postmark from 'postmark';
import { getContactCollection } from '@/lib/mongodb';

export async function POST(request: Request) {
  const data = await request.json();
  
  console.log('API Route: Received data:', data);
  
  // Basic validation
  if (!data.email || !data.orgSize || !data.source) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }
  
  // Save to MongoDB first
  try {
    const collection = await getContactCollection();
    
    const contactRequest = {
      email: data.email,
      orgSize: data.orgSize,
      caseStudy: data.caseStudy || false,
      source: data.source,
      otherSource: data.otherSource || null,
      createdAt: new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    const result = await collection.insertOne(contactRequest);
    console.log('Contact request saved to database:', result.insertedId);
  } catch (dbError) {
    console.error('Database error:', dbError);
    return NextResponse.json(
      { error: 'Failed to save contact request' },
      { status: 500 }
    );
  }
  
  // Then send email notification
  console.log('Postmark token check:', {
    hasToken: !!process.env.POSTMARK_SERVER_TOKEN,
    tokenLength: process.env.POSTMARK_SERVER_TOKEN?.length,
    tokenPreview: process.env.POSTMARK_SERVER_TOKEN?.substring(0, 8) + '...'
  });
  
  try {
    const token = process.env.POSTMARK_SERVER_TOKEN;
    if (!token) {
      throw new Error('POSTMARK_SERVER_TOKEN environment variable is not set');
    }
    
    const client = new postmark.ServerClient(token);
    
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'sales@tilt.com';
    
    const result = await client.sendEmail({
      From: notificationEmail,
      To: notificationEmail,
      Subject: 'New Contact Form Submission',
      HtmlBody: `
<h2>New Contact Form Submission</h2>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Organization Size:</strong> ${data.orgSize}</p>
<p><strong>Case Study Opt-in:</strong> ${data.caseStudy ? 'Yes' : 'No'}</p>
<p><strong>Source:</strong> ${data.source}</p>
<p><strong>Other Source:</strong> ${data.otherSource || 'N/A'}</p>
      `,
      TextBody: `
New Contact Form Submission

Email: ${data.email}
Organization Size: ${data.orgSize}
Case Study Opt-in: ${data.caseStudy ? 'Yes' : 'No'}
Source: ${data.source}
Other Source: ${data.otherSource || 'N/A'}
      `,
      MessageStream: 'outbound'
    });

    console.log('Email sent successfully via Postmark:', result.MessageID);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't fail the request if email sending fails, since DB write succeeded
    console.log('Contact request was saved to database but email notification failed');
    return NextResponse.json({ success: true, emailWarning: 'Contact saved but notification email failed' });
  }
}
