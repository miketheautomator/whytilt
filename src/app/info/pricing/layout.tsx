import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Simple, Transparent AI Automation Costs | Tilt',
  description: 'Pay only for AI model usage. Free for small businesses, no seat licenses first year, open source. Small tasks cost pennies, large automation batches cost dollars.',
  keywords: 'tilt pricing, AI automation cost, open source automation, no seat licenses, pay per use pricing, vision model costs, anthropic pricing, automation software cost',
  openGraph: {
    title: 'Pricing - Simple, Transparent AI Automation Costs',
    description: 'Pay only for AI model usage. Free for small businesses, no hidden fees, full open source access.',
    type: 'website',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}