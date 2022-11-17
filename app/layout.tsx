import type { ReactNode } from 'react';

import { NextSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { Comfortaa } from '@next/font/google';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import '../styles/globals.scss';

const comfortaa = Comfortaa({ weight: '400' });

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='pl' className={comfortaa.className}>
      <head>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {/*<title>KUKUN</title>*/}
        {/*<link rel='shortcut icon' href='/logo/logo.svg' type='image/x-icon' />*/}
        <NextSeo useAppDir={true} {...SEO} title='Home' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,1,0'
        />
      </head>

      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
