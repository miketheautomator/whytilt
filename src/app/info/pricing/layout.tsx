import { createMetadata } from '@/app/shared/metadata';

export const metadata = createMetadata({
  title: 'Pricing - Simple, Transparent AI Automation Costs | Tilt',
  description: 'Pay only for AI model usage. Free for small businesses, no seat licenses first year, open source. Small tasks cost pennies, large automation batches cost dollars.',
  keywords: [
    'tilt pricing',
    'AI automation cost', 
    'open source automation',
    'no seat licenses',
    'pay per use pricing',
    'vision model costs',
    'anthropic pricing',
    'automation software cost',
    'business automation pricing',
    'enterprise automation cost'
  ],
  url: 'https://whytilt.com/info/pricing',
  type: 'website',
  ldJsonType: 'WebPage',
  section: 'Pricing',
  ldJsonData: {
    '@type': 'WebPage',
    name: 'Tilt Pricing - Simple, Transparent AI Automation Costs',
    mainEntity: {
      '@type': 'Organization',
      name: 'Tilt',
      url: 'https://whytilt.com',
      logo: 'https://whytilt.com/android-chrome-192x192.png',
      offers: [
        {
          '@type': 'Offer',
          name: 'Small Business Plan',
          description: 'Pay only AI model costs. Zero licensing fees.',
          eligibilityRequirement: 'Under $250K revenue',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            price: 0,
            name: 'Zero licensing fees'
          }
        },
        {
          '@type': 'Offer', 
          name: 'Enterprise Plan',
          description: 'Free for one year. Then per-seat licensing.',
          eligibilityRequirement: 'Over $250K revenue',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            name: 'Free first year, then per-seat'
          }
        }
      ]
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://whytilt.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Pricing',
          item: 'https://whytilt.com/info/pricing'
        }
      ]
    }
  }
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}