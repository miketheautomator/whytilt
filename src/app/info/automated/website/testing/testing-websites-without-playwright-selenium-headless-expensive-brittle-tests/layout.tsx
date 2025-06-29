import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testing Websites Without Playwright, Selenium, Headless Browsers | Brittle DOM Tests Alternative | Tilt',
  description: 'Stop fighting with brittle Playwright and Selenium tests. Tilt uses real browsers and vision AI to test websites like actual customers do - no DOM selectors, no headless simulations, just plain English instructions.',
  keywords: 'website testing, playwright alternative, selenium alternative, DOM testing, headless browser testing, automated testing, browser automation, UI testing, web application testing, test automation tools',
  openGraph: {
    title: 'Testing Websites Without Brittle DOM Selectors',
    description: 'Test websites with AI vision instead of fragile DOM selectors. Real browsers, plain English instructions.',
    type: 'website',
  },
};

export default function WebsiteTestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}