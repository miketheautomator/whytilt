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
  email: string;
  revenue: string;
  employees: string;
  automation: string;
  theme: string;
}

export async function sendDemoRequest(data: DemoRequestData) {
  const { name, email, revenue, employees, automation, theme } = data;
  
  // Use different email address for enterprise sales
  const toEmail = theme === 'enterprise' ? 'hello+ent-sales@whytilt.com' : 'hello@whytilt.com';
  const subjectPrefix = theme === 'enterprise' ? 'Enterprise Sales Request' : 'Demo Request';
  
  return await transporter.sendMail({
    from: '"Tilt Demo" <hello@whytilt.com>',
    to: toEmail,
    subject: `${subjectPrefix} from ${name}`,
    html: `
      <h2>${theme === 'enterprise' ? 'New Enterprise Sales Request' : 'New Demo Request'}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Annual Revenue:</strong> ${revenue}</p>
      <p><strong>Employee Count:</strong> ${employees}</p>
      <p><strong>Page Theme:</strong> ${theme}</p>
      <h3>What would you automate away if you could?</h3>
      <p>${automation.replace(/\n/g, '<br>')}</p>
    `,
    text: `
      ${theme === 'enterprise' ? 'New Enterprise Sales Request' : 'New Demo Request'}
      
      Name: ${name}
      Email: ${email}
      Annual Revenue: ${revenue}
      Employee Count: ${employees}
      Page Theme: ${theme}
      
      What would you automate away if you could?
      ${automation}
    `
  });
}