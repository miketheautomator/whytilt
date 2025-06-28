import { NextRequest, NextResponse } from 'next/server';
import * as postmark from 'postmark';
import { getDemoCollection } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { firstName, email, automationGoals } = await request.json();

    if (!firstName || typeof firstName !== 'string') {
      return NextResponse.json(
        { error: 'First name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!automationGoals || typeof automationGoals !== 'string') {
      return NextResponse.json(
        { error: 'Automation goals are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to MongoDB
    try {
      const collection = await getDemoCollection();
      
      // Check if email already exists
      const existingEntry = await collection.findOne({ email });
      if (existingEntry) {
        return NextResponse.json(
          { error: 'Email already registered for demo' },
          { status: 409 }
        );
      }

      // Insert new demo request
      const result = await collection.insertOne({
        firstName,
        email,
        automationGoals,
        createdAt: new Date(),
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown'
      });

      console.log('Demo request saved to database:', firstName, email, result.insertedId);
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save to database' },
        { status: 500 }
      );
    }

    // Send email notification to sales team using Postmark
    try {
      const token = process.env.POSTMARK_SERVER_TOKEN;
      if (token) {
        const client = new postmark.ServerClient(token);
        
        const notificationEmail = process.env.NOTIFICATION_EMAIL || 'sales@tilt.com';
        
        await client.sendEmail({
          From: notificationEmail,
          To: notificationEmail,
          Subject: 'New Demo Request Submission',
          HtmlBody: `
<h2>New Demo Request Submission</h2>
<p><strong>List:</strong> Demo Requests</p>
<p><strong>Name:</strong> ${firstName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Automation Goals:</strong></p>
<p>${automationGoals}</p>
<p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `,
          TextBody: `
New Demo Request Submission

List: Demo Requests
Name: ${firstName}
Email: ${email}
Automation Goals: ${automationGoals}
Submitted: ${new Date().toLocaleString()}
          `,
          MessageStream: 'outbound'
        });

        console.log('Demo request notification sent to sales team');
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if email sending fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}