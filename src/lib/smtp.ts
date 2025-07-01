import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASSWORD!,
  },
});

export interface DemoRequestData {
  name: string;
  revenue: string;
  employees: string;
  automation: string;
  theme: string;
}

export async function sendDemoRequest(data: DemoRequestData) {
  const { name, revenue, employees, automation, theme } = data;
  
  return await transporter.sendMail({
    from: '"Tilt Demo" <hello@whytilt.com>',
    to: 'hello@whytilt.com',
    subject: `Demo Request from ${name}`,
    html: `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Annual Revenue:</strong> ${revenue}</p>
      <p><strong>Employee Count:</strong> ${employees}</p>
      <p><strong>Page Theme:</strong> ${theme}</p>
      <h3>What would you automate away if you could?</h3>
      <p>${automation.replace(/\n/g, '<br>')}</p>
    `,
    text: `
      New Demo Request
      
      Name: ${name}
      Annual Revenue: ${revenue}
      Employee Count: ${employees}
      Page Theme: ${theme}
      
      What would you automate away if you could?
      ${automation}
    `
  });
}