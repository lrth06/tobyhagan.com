import '../styles/globals.scss'

import Layout from '../components/Layout';
import { ThemeContext } from '../context/ThemeContext';
import { Cookies } from '../components/Cookie';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from "next/router";

import Script from "next/script";
import Head from 'next/head';
import { pageView } from '../components/utils/pageView';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [dark, setDark] = useState(null);
  const themeValue = useMemo(() => ({ dark, setDark }), [dark, setDark]);

  useEffect(() => {
    pageView(router.asPath);
  }, [router.asPath]);

  useEffect(() => {
    const darkPreference = localStorage.getItem('dark');

    if (!darkPreference) {
      const systemPreference = window.matchMedia(
        '(prefers-color-scheme: dark)',
      );
      if (systemPreference.matches) {
        setDark(true);
        localStorage.setItem('dark', true);
      } else {
        setDark(false);
        localStorage.setItem('dark', false);
      }
    } else {
      if (darkPreference === 'true') {
        setDark(true);
      } else if (darkPreference === 'false') {
        setDark(false);
      }
    }
  }, [setDark]);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('dark', true);
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('dark', false);
    }
  }, [dark, setDark]);


  return (
    <ThemeContext.Provider value={themeValue}>
      <div className="app__container">
        <Script
          id="localBusiness"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Toby Hagan",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Christiansburg",
                addressRegion: "VA",
                postalCode: "24073",
                addressCountry: "US",
                streetAddress: "Christiansburg, Va",
              },
              url: "https://tobyhagan.com",
              image: "https://tobyhagan.com/images/toby.jpg",
              priceRange: "$$",
              telephone: "+15402008108",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "00:00",
                  closes: "23:59",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "00:00",
                  closes: "00:00",
                },
              ],
            })
          }}
        />
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#1e2227" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="referrer" content="origin" />
          <meta name="copyright" content="Toby Hagan" />
          <meta property="og:site_name" content="Toby Hagan" />

          <link rel="alternate" type="application/rss+xml"
            title="RSS Feed for tobyhagan.com"
            href="/atom.xml" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://www.googletagmanager.com/" />
        </Head>
        <Layout>
          <Component {...pageProps} />
          <Cookies />
        </Layout>
      </div>
    </ThemeContext.Provider>)
}

export default MyApp
