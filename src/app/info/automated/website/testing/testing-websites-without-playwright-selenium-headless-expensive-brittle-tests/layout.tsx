import { createMetadata } from '@/app/shared/metadata';

export const metadata = createMetadata({
  title: 'Testing Websites Without Playwright, Selenium, Headless Browsers | Brittle DOM Tests Alternative | Tilt',
  description: 'Stop fighting with brittle Playwright and Selenium tests. Tilt uses real browsers and vision AI to test websites like actual customers do - no DOM selectors, no headless simulations, just plain English instructions.',
  keywords: [
    'website testing',
    'playwright alternative', 
    'selenium alternative',
    'DOM testing',
    'headless browser testing',
    'automated testing',
    'browser automation',
    'UI testing',
    'web application testing',
    'test automation tools',
    'vision AI testing',
    'brittle test fix',
    'real browser testing'
  ],
  url: 'https://whytilt.com/info/automated/website/testing/testing-websites-without-playwright-selenium-headless-expensive-brittle-tests',
  type: 'article',
  ldJsonType: 'Article',
  section: 'Website Testing',
  publishedTime: '2024-01-01',
  ldJsonData: {
    '@type': 'Article',
    headline: 'Testing Websites Without Playwright, Selenium, or Brittle DOM Selectors',
    articleSection: 'Website Testing',
    about: {
      '@type': 'Thing',
      name: 'Website Testing Automation',
      description: 'Alternative approaches to web application testing without brittle DOM selectors'
    },
    mentions: [
      {
        '@type': 'SoftwareApplication',
        name: 'Playwright',
        description: 'Browser automation testing framework'
      },
      {
        '@type': 'SoftwareApplication', 
        name: 'Selenium',
        description: 'Web browser automation tool'
      }
    ],
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
          name: 'Website Testing',
          item: 'https://whytilt.com/info/automated/website/testing/testing-websites-without-playwright-selenium-headless-expensive-brittle-tests'
        }
      ]
    }
  }
});

export default function WebsiteTestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}