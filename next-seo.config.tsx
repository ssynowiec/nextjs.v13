import { NextSeoProps } from 'next-seo';

const title = undefined;
const titleTemplate = 'KUKUN | %s';
const defaultTitle = 'KUKUN';

const description =
  'A Next.js SEO component that helps you manage your document head.';

const url = 'http://localhost:3000';

const SEO: NextSeoProps = {
  title,
  description,
  canonical: url,
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon/favicon.ico' },
    { rel: 'icon', href: '/favicon/favicon-16x16.png', sizes: '16x16' },
    { rel: 'icon', href: '/favicon/favicon-32x32.png', sizes: '32x32' },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'android-chrome-192x192',
      href: '/favicon/android-chrome-192x192.png',
      sizes: '192x192',
    },
    {
      rel: 'android-chrome-512x512',
      href: '/favicon/android-chrome-512x512.png',
      sizes: '512x512',
    },
    { rel: 'manifest', href: '/favicon/manifest.json' },
  ],
  themeColor: '#0080ff',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url,
    title,
    description,
    images: [
      {
        url: `${url}images/home.png`,
        alt: title,
        width: 1200,
        height: 628,
      },
    ],
  },
  // twitter: {
  //   handle: twitterHandler,
  //   site: twitterHandler,
  //   cardType: 'summary_large_image',
  // },
};

export default SEO;
