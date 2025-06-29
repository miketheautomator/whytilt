import { Metadata } from 'next';

export interface TiltMetadataConfig {
  title: string;
  description: string;
  keywords?: string | string[];
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  author?: string;
  locale?: string;
  siteName?: string;
  twitterHandle?: string;
  ldJsonType?: 'Organization' | 'WebPage' | 'Article' | 'Product' | 'SoftwareApplication';
  ldJsonData?: Record<string, unknown>;
}

const defaultConfig = {
  url: 'https://whytilt.com',
  siteName: 'Tilt',
  image: '/og-image.png',
  imageAlt: 'Tilt - Real intelligence. Real desktop. Real work.',
  type: 'website' as const,
  locale: 'en_US',
  twitterHandle: '@tiltapp',
  ldJsonType: 'WebPage' as const,
};

export function createMetadata(config: TiltMetadataConfig): Metadata {
  const mergedConfig = { ...defaultConfig, ...config };
  
  // Handle keywords array
  const keywordsArray = Array.isArray(mergedConfig.keywords) 
    ? mergedConfig.keywords 
    : typeof mergedConfig.keywords === 'string' 
      ? mergedConfig.keywords.split(',').map(k => k.trim())
      : [];

  const metadata: Metadata = {
    metadataBase: new URL('https://whytilt.com'),
    title: mergedConfig.title,
    description: mergedConfig.description,
    keywords: keywordsArray,
    openGraph: {
      title: mergedConfig.title,
      description: mergedConfig.description,
      url: mergedConfig.url,
      siteName: mergedConfig.siteName,
      images: [
        {
          url: mergedConfig.image,
          width: 1200,
          height: 630,
          alt: mergedConfig.imageAlt,
        },
      ],
      locale: mergedConfig.locale,
      type: mergedConfig.type,
      ...(mergedConfig.publishedTime && { publishedTime: mergedConfig.publishedTime }),
      ...(mergedConfig.modifiedTime && { modifiedTime: mergedConfig.modifiedTime }),
      ...(mergedConfig.section && { section: mergedConfig.section }),
      ...(mergedConfig.author && { authors: [mergedConfig.author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: mergedConfig.title,
      description: mergedConfig.description,
      images: [mergedConfig.image],
      creator: mergedConfig.twitterHandle,
      site: mergedConfig.twitterHandle,
    },
  };

  return metadata;
}

export function createLdJson(config: TiltMetadataConfig) {
  const mergedConfig = { ...defaultConfig, ...config };
  
  // Base structured data
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': mergedConfig.ldJsonType,
    name: mergedConfig.siteName,
    url: mergedConfig.url,
    description: mergedConfig.description,
  };

  // Type-specific structured data
  let structuredData: Record<string, unknown> = { ...baseStructuredData };

  switch (mergedConfig.ldJsonType) {
    case 'Organization':
      structuredData = {
        ...structuredData,
        logo: `${mergedConfig.url}/android-chrome-192x192.png`,
        sameAs: [
          'https://github.com/WhyTilt/tilt-app',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'San Francisco',
          addressRegion: 'CA',
          addressCountry: 'US'
        },
        foundingDate: '2024',
        founder: {
          '@type': 'Person',
          name: 'Tilt Team'
        }
      };
      break;
      
    case 'SoftwareApplication':
      structuredData = {
        ...structuredData,
        '@type': 'SoftwareApplication',
        applicationCategory: 'BusinessApplication',
        operatingSystem: ['Windows', 'macOS', 'Linux'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          eligibleRegion: 'US'
        },
        creator: {
          '@type': 'Organization',
          name: 'Tilt', 
          url: mergedConfig.url,
          logo: `${mergedConfig.url}/android-chrome-192x192.png`
        },
        featureList: [
          'Website usability testing automation',
          'Functional web testing',
          'Analytics tag validation', 
          'GTM tag testing',
          'Browser automation',
          'Desktop task automation',
          'No-code automation platform'
        ]
      };
      break;
      
    case 'WebPage':
      structuredData = {
        ...structuredData,
        '@type': 'WebPage',
        mainEntity: {
          '@type': 'Organization',
          name: 'Tilt',
          url: mergedConfig.url,
          logo: `${mergedConfig.url}/android-chrome-192x192.png`
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: mergedConfig.url
            }
          ]
        }
      };
      break;
      
    case 'Article':
      structuredData = {
        ...structuredData,
        '@type': 'Article',
        headline: mergedConfig.title,
        author: {
          '@type': 'Organization',
          name: 'Tilt',
          url: mergedConfig.url
        },
        publisher: {
          '@type': 'Organization', 
          name: 'Tilt',
          logo: {
            '@type': 'ImageObject',
            url: `${mergedConfig.url}/android-chrome-192x192.png`
          }
        },
        ...(mergedConfig.publishedTime && { datePublished: mergedConfig.publishedTime }),
        ...(mergedConfig.modifiedTime && { dateModified: mergedConfig.modifiedTime }),
        image: `${mergedConfig.url}${mergedConfig.image}`
      };
      break;
      
    case 'Product':
      structuredData = {
        ...structuredData,
        '@type': 'Product',
        brand: {
          '@type': 'Brand',
          name: 'Tilt'
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'Tilt',
          url: mergedConfig.url
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Tilt'
          }
        }
      };
      break;
  }

  // Merge any custom LD+JSON data
  if (mergedConfig.ldJsonData) {
    structuredData = { ...structuredData, ...mergedConfig.ldJsonData };
  }

  return structuredData;
}

export function LdJsonScript({ config }: { config: TiltMetadataConfig }) {
  const structuredData = createLdJson(config);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}