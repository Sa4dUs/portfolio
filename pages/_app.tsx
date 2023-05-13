import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Marcelo Domínguez | Fullstack developer"
        titleTemplate="Marcelo Domínguez | Fullstack developer"
        defaultTitle="Marcelo Domínguez | Fullstack developer"
        description="Hey! I'm Marcelo, A Fullstack Developer, Blogger and a Student!"
        openGraph={{
          url: "https://sa4dus.vercel.app",
          title: "Marcelo Domínguez | Fullstack developer",
          description:
            "Hey! I'm Marcelo, A Fullstack Developer, Blogger and a Student!",
          images: [
            {
              url: "https://asset.cloudinary.com/dg0kmznhm/c3eae96ff6e5a8499d0e9193259a458f",
              width: 800,
              height: 420,
              alt: "Anurag | Frontend Developer",
            },
          ],
        }}
        twitter={{
          handle: "@_dmmarce27",
          site: "@_dmmarce27",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Fullstack Developer, sa4dus, marcelo dominguez, Web Developer, web development, web developer, blogger, tech enthusiast, maths ,mathematics,open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
